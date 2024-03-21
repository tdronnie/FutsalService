from service.tracking import track
import json

team_A_players = []
team_B_players = []

goal_post_A_id = {}
goal_post_B_id = {}

id_map = {}

field = {
    'x1':0,
    'x2':1920,
    'y1':0,
    'y2':1080
}

def get_results(source, game_id):
    results = track(source)


def player_field_filter(players):
    x_padding = 500
    y_padding = 300
    filtered_players = []

    for player in players:
        position_x = player.get('position')[0]
        position_y = player.get('position')[1]
        if position_x < field.get('x1') - x_padding or position_x > field.get(
                'x2') + x_padding or position_y < field.get('y1') - y_padding or position_y > field.get(
                'y2') + y_padding:
            continue
        filtered_players.append(player)
    return filtered_players


def player_team_divider(players):
    players.sort(key=lambda x: x['c_score'])
    total_player_cnt = len(players)
    half = None
    team_A_players = []
    team_B_players = []

    if total_player_cnt < 10:
        return None
    elif total_player_cnt == 10 or total_player_cnt == 11:
        half = 5
    else:
        half = 6

    players.sort(key=lambda x: x['position'][0])
    team_A_players = players[:half]
    team_B_players = players[half:]
    return (team_A_players, team_B_players)


def goal_post_team_divider(goal_posts):
    goal_posts.sort(key=lambda x: x['c_score'])
    goal_posts = goal_posts[:2]
    goal_posts.sort(key=lambda x: x['x1'])
    return goal_posts[0], goal_posts[1]


# 리턴 객체에 포함될 데이터
# team_A_goal_post
# team_B_goal_post
# team_A_players
# team_B_players

def define_objects(objs):
    #     if len(objs)<16:
    #         return -1
    players = []
    goal_posts = []
    balls = []

    for obj in objs:
        obj_name = obj.get('name')
        if obj_name == 'player':
            players.append({
                'id': obj.get('track_id'),
                'position': get_position(obj.get('box')),
                'c_score': obj.get('confidence')
            })
        elif obj_name == 'goal_post':
            box = obj.get('box')
            goal_posts.append({
                'id': obj.get('track_id'),
                'x1': box.get('x1'),
                'x2': box.get('x2'),
                'y1': box.get('y1'),
                'y2': box.get('y2'),
                'c_score': obj.get('confidence')
            })

    # 탐지된 player와 goal_post의 confidence score 순서로 객체 갯수 만큼 자르기
    # player : 경기장 밖 객체는 제외
    players = player_field_filter(players)

    # confidence score 순서로 10명 또는 12명으로 제한 (total_player_count/2)
    # position x 위치 순서로 왼쪽 선수들은 A팀, 오른쪽 선수들은 B팀
    team_A_players, team_B_players = player_team_divider(players)
    team_A_goal_post, team_B_goal_post = goal_post_team_divider(goal_posts)

    return {
        'team_A_players': team_A_players,
        'team_B_players': team_B_players,
        'team_A_goal_post': team_A_goal_post,
        'team_B_goal_post': team_B_goal_post
    }


def get_position(box) -> float:
    position = -1
    position = (box.get('x1') + (box.get('x2')-box.get('x1')) , box.get('y1')+(box.get('y2')-box.get('y1')))
    return position

def get_mapped_id(id_map, origin_id) -> int:
    return id_map.get(str(origin_id))