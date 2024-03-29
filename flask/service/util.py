def get_position(box):
    if box == None:
        return -1
    return box.get('x1') + (box.get('x2') - box.get('x1')), box.get('y1') + (box.get('y2') - box.get('y1'))


def get_mapped_id(player_id_map, origin_id):
    return player_id_map.get(str(origin_id))


def is_in_area(field, obj, margin_x=600, margin_y=300):
    if obj.get('x1') < field.get('x1') - margin_x or obj.get('x2') > field.get(
            'x2') + margin_x or obj.get('y1') < field.get('y1') - margin_y or obj.get('y2') > field.get(
        'y2') + margin_y:
        return False
    return True


def field_area_filter(field, objs):
    filtered_obj = []
    for obj in objs:
        if is_in_area(field, obj.get('box')):
            filtered_obj.append(obj)
    return filtered_obj


def get_distance(obj1, obj2):
    obj1_position = get_position(obj1.get('box'))
    obj2_position = get_position(obj2.get('box'))
    return ((obj1_position[0] - obj2_position[0]) ** 2 + (obj1_position[1] - obj2_position[1]) ** 2) ** (1 / 2)


def calc_iou(obj1, obj2):
    intersection_x1 = max(obj1.get('x1'), obj2.get('x1'))
    intersection_x2 = min(obj1.get('x2'), obj2.get('x2'))
    intersection_y1 = max(obj1.get('y1'), obj2.get('y1'))
    intersection_y2 = min(obj1.get('y2'), obj2.get('y2'))

    intersection = max(0, intersection_x2 - intersection_x1) * max(0, intersection_y2 - intersection_y1)

    box1_area = abs((obj1.get('x2') - obj1.get('x1')) * (obj1.get('y2') - obj1.get('y1')))
    box2_area = abs((obj2.get('x2') - obj2.get('x1')) * (obj2.get('y2') - obj2.get('y1')))
    return intersection / (box1_area + box2_area - intersection + 1e-7)


def validator_field(field, objs_field):
    if len(objs_field) == 0:
        return field

    max_similarity_obj = field
    max_similarity = -1
    
    for obj in objs_field:
        obj_similarity = calc_iou(field, obj.get('box'))
        if obj_similarity > max_similarity:
            max_similarity_obj = obj
            max_similarity = obj_similarity
    if max_similarity_obj is None:
        return field
    else:
        return max_similarity_obj.get('box')


def validator_ball(field, objs_ball):
    objs_ball = field_area_filter(field, objs_ball)
    if len(objs_ball) == 0:
        return None
    objs_ball.sort(key=lambda x: -x.get('confidence'))
    return objs_ball[0].get('box')


def validator_goal_post(objs_goal_post):
    if len(objs_goal_post) < 2:
        return None
    objs_goal_post.sort(key=lambda x: -x.get('confidence'))
    return objs_goal_post[0].get('box'), objs_goal_post[1].get('box')


def validator_player(field, team_A_player_id_map, team_B_player_id_map, lost_players, objs_player):
    not_mapped_players = []
    team_A_players = []
    team_B_players = []

    for player in objs_player:
        if player.get('track_id') in team_A_player_id_map.values():
            team_A_players.append(player)
        elif player.get('track_id') in team_B_player_id_map.values():
            team_B_players.append(player)
        else:
            not_mapped_players.append(player)

    not_mapped_players = field_area_filter(field, not_mapped_players)
    new_lost_players = not_mapped_players.copy()

    lost_num = len(lost_players)
    for idx, player in enumerate(not_mapped_players):
        if idx < lost_num:
            old_id = lost_players[idx].get('track_id')
            new_id = player.get('track_id')
            for num, id in team_A_player_id_map.items():
                if id == old_id:
                    team_A_player_id_map.update({num: new_id})
            for num, id in team_B_player_id_map.items():
                if id == old_id:
                    team_B_player_id_map.update({num: new_id})
            new_lost_players = [i for i in new_lost_players if i.get('track_id' != new_id)]
            lost_num -= 1
        else:
            break
    return team_A_players, team_B_players, team_A_player_id_map, team_B_player_id_map, new_lost_players


def player_team_divider(field, players):
    players = field_area_filter(field, players)
    players.sort(key=lambda x: x['confidence'])
    total_player_cnt = len(players)

    if total_player_cnt < 10:
        return None
    elif total_player_cnt == 10 or total_player_cnt == 11:
        half = 5
    else:
        half = 6

    players.sort(key=lambda x: get_position(x.get('box'))[0])
    team_A_players = players[:half]
    team_B_players = players[half:]
    return team_A_players, team_B_players


def goal_post_team_divider(goal_posts):
    if len(goal_posts) <2:
        return None
    goal_posts.sort(key=lambda x: x['confidence'])
    goal_posts = goal_posts[:2]
    goal_posts.sort(key=lambda x: x.get('box').get('x1'))
    
    return goal_posts[0].get('box'), goal_posts[1].get('box')


def obj_divider(frame_objs):
    objs_field = []
    objs_goal_post = []
    objs_player = []

    for obj in frame_objs:
        obj_name = obj.get('name')
        if obj_name == 'field':
            objs_field.append(obj)
        if obj_name == 'goal_post':
            objs_goal_post.append(obj)
        elif obj_name == 'player':
            objs_player.append(obj)

    return objs_field, objs_goal_post, objs_player


def define_objs(field, objs_goal_post, objs_player):
    result_info = {}
    team_A_player_id_map = {}
    team_B_player_id_map = {}

    if len(objs_goal_post) >= 2:
        team_A_goal_post, team_B_goal_post = goal_post_team_divider(objs_goal_post)
        result_info.update({'team_A_goal_post': team_A_goal_post})
        result_info.update({'team_B_goal_post': team_B_goal_post})
    if len(objs_player) >= 10:
        team_A_players, team_B_players = player_team_divider(field, objs_player)
    
        for i in range(len(team_A_players)):
            team_A_player_id_map.update({str(i): team_A_players[i].get('track_id')})
            team_B_player_id_map.update({str(i): team_B_players[i].get('track_id')})
        result_info.update({'team_A_players': team_A_players})
        result_info.update({'team_B_players': team_B_players})
        result_info.update({'team_A_player_id_map': team_A_player_id_map})
        result_info.update({'team_B_player_id_map': team_B_player_id_map})

    return result_info


def set_format(players):
    formatted = []
    for player in players:
        x, y = get_position(player.get('box'))
        formatted.append({
            'id': player.get('track_id'),
            'x': x,
            'y': y
        })
    return formatted
