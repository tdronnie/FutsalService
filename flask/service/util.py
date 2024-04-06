import os
import cv2


def get_position(box):
    if box == None:
        return None
    return int(box.get('x1') + (box.get('x2') - box.get('x1'))), int(box.get('y1') + (box.get('y2') - box.get('y1')))


def get_mapped_id(player_id_map, origin_id):
    return player_id_map.get(str(origin_id))


def is_in_area(field, obj, margin_x=100, margin_y=50):
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
    if type(obj1) == dict and obj1.get('box') is not None:
        obj1_position = get_position(obj1.get('box'))
        obj2_position = get_position(obj2.get('box'))
    elif type(obj1) == tuple:
        obj1_position = obj1
        obj2_position = obj2
    else:
        obj1_position = (obj1.get('x'), obj1.get('y'))
        obj2_position = (obj2.get('x'), obj2.get('y'))
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

    if len(objs_field) == 1:
        if calc_iou(field, objs_field[0].get('box')) >= 0.5:
            return objs_field[0].get('box')

    max_similarity_obj = field
    max_similarity = 0.5

    for obj in objs_field:
        obj_similarity = calc_iou(field, obj.get('box'))
        if obj_similarity > max_similarity:
            max_similarity_obj = obj
            max_similarity = obj_similarity
    if max_similarity_obj is None:
        return field
    else:
        return max_similarity_obj.get('box')


def validator_ball(frame_num, last_ball, objs_ball):
    boundary_per_frame = 200
    if len(objs_ball) == 0:
        return {'x': None, 'y': None}

    if last_ball is not None and last_ball.get('x') is not None:
        objs_ball = [x for x in objs_ball if
                     get_distance(get_position(x.get('box')), (last_ball.get('x'), last_ball.get('y'))) < (
                             frame_num - last_ball.get('frame_num')) * boundary_per_frame]

    if objs_ball is not None and len(objs_ball) != 0:
        objs_ball.sort(key=lambda x: -x.get('confidence'))
        if objs_ball[0].get('box') is not None:
            x, y = get_position(objs_ball[0].get('box'))
        return {'x': x, 'y': y}

    return {'x': None, 'y': None}


def validator_goal_post(objs_goal_post):
    if len(objs_goal_post) < 2:
        return None
    objs_goal_post.sort(key=lambda x: -x.get('confidence'))
    return objs_goal_post[0].get('box'), objs_goal_post[1].get('box')


def validator_player(team_A_player_id_map, team_B_player_id_map, lost_players, objs_player):
    new_players = []
    team_A_players = []
    team_B_players = []

    for player in objs_player:
        if player.get('track_id') in team_A_player_id_map.values():
            team_A_players.append(player)
        elif player.get('track_id') in team_B_player_id_map.values():
            team_B_players.append(player)
        else:
            new_players.append(player)

    lost_num = len(lost_players)
    matched_players = []

    if lost_players is not None and new_players is not None:

        for idx, player in enumerate(lost_players):
            if len(new_players) == 0:
                break
            new_players.sort(key=lambda x: get_distance(player, x))

            for num, track_id in team_A_player_id_map.items():
                if player.get('track_id') == track_id:
                    team_A_player_id_map.update({num: new_players[0].get('track_id')})
                    del new_players[0]
                    matched_players.append(player)

            for num, track_id in team_B_player_id_map.items():
                if player.get('track_id') == track_id:
                    team_B_player_id_map.update({num: new_players[0].get('track_id')})
                    del new_players[0]
                    matched_players.append(player)

    lost_players = [player for player in lost_players if player not in matched_players]

    return team_A_players, team_B_players, team_A_player_id_map, team_B_player_id_map, lost_players


def player_team_divider(field, players):
    players = field_area_filter(field, players)
    if len(players) < 10:
        return None
    total_player_cnt = len(players)

    if total_player_cnt == 10 or total_player_cnt == 11:
        half = 5
    else:
        half = 6
    players.sort(key=lambda x: -x['confidence'])
    players = players[:total_player_cnt]
    players.sort(key=lambda x: get_position(x.get('box'))[0])
    team_A_players = players[:half]
    team_B_players = players[half:]
    return team_A_players, team_B_players


def goal_post_team_divider(goal_posts):
    if len(goal_posts) < 2:
        return None
    goal_posts.sort(key=lambda x: -x['confidence'])
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

    # goal post
    team_A_goal_post = None
    team_B_goal_post = None

    if len(objs_goal_post) >= 2:
        temp = goal_post_team_divider(objs_goal_post)
        if temp is not None:
            team_A_goal_post, team_B_goal_post = temp
    result_info.update({'team_A_goal_post': team_A_goal_post})
    result_info.update({'team_B_goal_post': team_B_goal_post})

    # player
    team_A_players = None
    team_B_players = None
    team_A_player_id_map = {}
    team_B_player_id_map = {}

    if len(objs_player) >= 10:
        temp = player_team_divider(field, objs_player)
        if temp is not None:
            team_A_players, team_B_players = temp
            for i in range(0, len(team_A_players)):
                team_A_player_id_map.update({str(i + 1): team_A_players[i].get('track_id')})
                team_B_player_id_map.update({str(i + 1): team_B_players[i].get('track_id')})
    result_info.update({'team_A_players': team_A_players})
    result_info.update({'team_B_players': team_B_players})
    result_info.update({'team_A_player_id_map': team_A_player_id_map})
    result_info.update({'team_B_player_id_map': team_B_player_id_map})

    return result_info


def set_format(id_map, players):
    if players is None or len(players) == 0:
        return [{'player_id': i, 'x': None, 'y': None} for i in range(1, 7)]

    formatted = []
    reversed_id_map = {str(v): int(k) for k, v in id_map.items()}
    formatted_nums = []

    for player in players:
        x, y = get_position(player.get('box'))

        if reversed_id_map.get(str(player.get('track_id'))) is not None:
            formatted_nums.append(reversed_id_map.get(str(player.get('track_id'))))
            formatted.append({
                'player_id': reversed_id_map.get(str(player.get('track_id'))),
                'x': int(x),
                'y': int(y)
            })

    lost = [{'player_id': i, 'x': None, 'y': None} for i in range(1, 7) if i not in formatted_nums]

    formatted.extend(lost)
    formatted.sort(key=lambda x: x.get('player_id'))

    return formatted


def change_int(target):
    if target is None or len(target) == 0:
        return None
    target.update({'x1': int(target.get('x1'))})
    target.update({'x2': int(target.get('x2'))})
    target.update({'y1': int(target.get('y1'))})
    target.update({'y2': int(target.get('y2'))})
    return target


def interpolation(defined_frame, data):
    interpolated_data = data
    for frame_idx, frame in enumerate(interpolated_data):
        if frame_idx != defined_frame:
            continue

        if frame.get('ball') is None or frame.get('ball').get('x') is None:
            if frame_idx >= 1 and interpolated_data[frame_idx - 1].get('ball') is not None and interpolated_data[
                frame_idx - 1].get('ball').get('x') is not None:
                interpolated_data[frame_idx].update({'ball': interpolated_data[frame_idx - 1].get('ball')})

        for i in range(len(interpolated_data)):
            for j in range(len(interpolated_data[i].get('team_A_players'))):
                if interpolated_data[i].get('team_A_players')[j].get('x') is None:
                    if i - 1 >= 0 and interpolated_data[i - 1].get('team_A_players')[j].get('x') is not None:
                        interpolated_data[i].get('team_A_players')[j].update(
                            interpolated_data[i - 1].get('team_A_players')[j])

            for j in range(len(interpolated_data[i].get('team_B_players'))):
                if interpolated_data[i].get('team_B_players')[j].get('x') is None:
                    if i - 1 >= 0 and interpolated_data[i - 1].get('team_B_players')[j].get('x') is not None:
                        interpolated_data[i].get('team_B_players')[j].update(
                            interpolated_data[i - 1].get('team_B_players')[j])

    for i in range(defined_frame, -1, -1):
        if interpolated_data[i].get('ball') is None or interpolated_data[i].get('ball').get('x') is None:
            if i + 1 < len(interpolated_data) and interpolated_data[i + 1].get('ball') is not None or interpolated_data[
                i + 1].get('ball').get('x') is not None:
                interpolated_data[i].get('ball').update(interpolated_data[i + 1].get('ball'))

        for j in range(len(interpolated_data[i].get('team_A_players'))):
            if interpolated_data[i].get('team_A_players')[j].get('x') is None:
                if i + 1 < len(interpolated_data) and interpolated_data[i + 1].get('team_A_players')[j].get(
                        'x') is not None:
                    interpolated_data[i].get('team_A_players')[j].update(
                        interpolated_data[i + 1].get('team_A_players')[j])

        for j in range(len(interpolated_data[i].get('team_B_players'))):
            if interpolated_data[i].get('team_B_players')[j].get('x') is None:
                if i + 1 < len(interpolated_data) and interpolated_data[i + 1].get('team_B_players')[j].get(
                        'x') is not None:
                    interpolated_data[i].get('team_B_players')[j].update(
                        interpolated_data[i + 1].get('team_B_players')[j])

    return interpolated_data


def delete_videos(path):
    if os.path.exists(path):
        for file in os.scandir(path):
            if not file.name == '.ipynb_checkpoints':
                os.remove(file.path)
        print('all videos removed')
    else:
        print('directory not found')
    return None


def write_defined_image(orig_img, filename, result_info):
    reversed_team_A_id_map = {str(v): k for k, v in result_info.get('team_A_player_id_map').items()}
    reversed_team_B_id_map = {str(v): k for k, v in result_info.get('team_B_player_id_map').items()}

    img = orig_img

    for player in result_info.get('team_A_players'):
        x1 = int(player.get('box').get('x1'))
        x2 = int(player.get('box').get('x2'))
        y1 = int(player.get('box').get('y1'))
        y2 = int(player.get('box').get('y2'))

        player_id = reversed_team_A_id_map.get(str(player.get('track_id')))

        img = cv2.rectangle(img, (x1, y1), (x2, y2), (0, 0, 255), 4)
        cv2.putText(img, player_id, (x1, y1), cv2.FONT_HERSHEY_COMPLEX, 1, (0, 255, 0), 1)

    for player in result_info.get('team_B_players'):
        x1 = int(player.get('box').get('x1'))
        x2 = int(player.get('box').get('x2'))
        y1 = int(player.get('box').get('y1'))
        y2 = int(player.get('box').get('y2'))

        player_id = reversed_team_B_id_map.get(str(player.get('track_id')))

        img = cv2.rectangle(img, (x1, y1), (x2, y2), (255, 0, 0), 3)
        cv2.putText(img, player_id, (x1, y1), cv2.FONT_HERSHEY_COMPLEX, 1, (0, 255, 0), 1)

    cv2.imwrite('./service/image/' + filename + '.png', img)
    return None
