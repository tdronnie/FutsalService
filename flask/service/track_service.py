from service.tracking.track import track
from service import util
import cv2


class track_service:
    def __init__(self):
        self.source = None
        self.team_A_players = []
        self.team_B_players = []
        self.team_A_goal_post = {}
        self.team_B_goal_post = {}
        self.ball = {}
        self.field = {
            'x1': 0,
            'x2': 1920,
            'y1': 0,
            'y2': 1080
        }
        self.team_A_player_id_map = {}
        self.team_B_player_id_map = {}
        self.lost_players = []
        self.service_instance = track()

    def get_result(self, source):
        self.source = source
        result = {'data': []}
        cap = cv2.VideoCapture(self.source)

        frame_num = 0
        while cap.isOpened():
            success, frame = cap.read()
            if success:
                frame_num += 1
                track_result = self.service_instance.track(frame)[0]
                objs_field, objs_goal_post, objs_player = util.obj_devider(track_result)

                self.field = util.validator_field(self.field, objs_field)

                detect_result = self.service_instance.detect(frame)[0]
                self.ball = util.validator_ball(self.field, detect_result)

                if frame_num == 1:
                    result_info = util.define_objs(self.field, objs_goal_post, objs_player)
                    self.team_A_players = result_info.get('team_A_players')
                    self.team_B_players = result_info.get('team_B_players')
                    self.team_A_goal_post = result_info.get('team_A_goal_post')
                    self.team_B_goal_post = result_info.get('team_B_goal_post')
                    self.team_A_player_id_map = result_info.get('team_A_player_id_map')
                    self.team_B_player_id_map = result_info.get('team_B_player_id_map')
                else:
                    self.team_A_goal_post, self.team_B_goal_post = util.validator_goal_post(objs_goal_post)
                    self.team_A_players, self.team_B_players, self.team_A_player_id_map, self.team_B_player_id_map = util.validator_player(self.team_A_player_id_map, self.team_B_player_id_map, self.lost_players, objs_player)

                result.get('data').append({
                    'frame_num': frame_num,
                    'ball': self.ball,
                    'team_A_goal_post': self.team_A_goal_post,
                    'team_B_goal_post': self.team_B_goal_post,
                    'team_A_players': self.team_A_players,
                    'team_B_players': self.team_A_players
                })

        return result
