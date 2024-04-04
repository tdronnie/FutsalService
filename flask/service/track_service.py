from service.tracking.model import model
from service import util
import requests
import cv2
import time


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
        self.model = model()

    def get_result(self, source):
        self.source = source

        save_path = './service/video/'
        filename = source.split('/')[-1]

        start = time.time()
        with requests.get(source, stream=True) as r:
            p = 0
            with open(save_path + filename, 'wb') as f:
                for chunk in r.iter_content(chunk_size=100 * 1024 * 1024):
                    p += 1
                    print(p)
                    f.write(chunk)
        end = time.time()
        print(end - start)

        result = {'data': []}
        cap = cv2.VideoCapture(self.source)
        frame_num = 0
        last_ball = {}
        defined = False
        defined_frame = 0

        while cap.isOpened():
            success, frame = cap.read()
            if success:
                frame_num += 1
                track_result = eval(self.model.track(frame)[0].tojson())

                objs_field, objs_goal_post, objs_player = util.obj_divider(track_result)

                self.field = util.validator_field(self.field, objs_field)

                detect_result = eval(self.model.detect(frame)[0].tojson())

                if detect_result is None:
                    self.ball = None
                else:
                    self.ball = util.validator_ball(frame_num, last_ball, detect_result)
                    if self.ball is not None:
                        last_ball = {
                            'frame_num': frame_num,
                            'x': self.ball.get('x'),
                            'y': self.ball.get('y')
                        }
                if not defined:
                    result_info = util.define_objs(self.field, objs_goal_post, objs_player)
                    self.team_A_players = result_info.get('team_A_players')
                    self.team_B_players = result_info.get('team_B_players')
                    self.team_A_goal_post = result_info.get('team_A_goal_post')
                    self.team_B_goal_post = result_info.get('team_B_goal_post')
                    self.team_A_player_id_map = result_info.get('team_A_player_id_map')
                    self.team_B_player_id_map = result_info.get('team_B_player_id_map')
                    if not None in result_info.values():
                        defined = True
                        defined_frame = frame_num - 1
                        temp = self.model.track(frame)[0]
                        temp.plot(show=True, conf=False, font_size=3, labels=True)
                        temp.show()
                        temp.save(filename='test.jpg')
                        util.write_defined_image(frame, filename, result_info)
                else:
                    if util.validator_goal_post(objs_goal_post) is not None:
                        self.team_A_goal_post, self.team_B_goal_post = util.validator_goal_post(objs_goal_post)

                    self.team_A_players, self.team_B_players, self.team_A_player_id_map, self.team_B_player_id_map, self.lost_players = \
                        util.validator_player(self.team_A_player_id_map, self.team_B_player_id_map, self.lost_players,
                                              objs_player)

                result.get('data').append({
                    'frame_num': frame_num,
                    'field': util.change_int(self.field),
                    'ball': self.ball,
                    'team_A_goal_post': util.change_int(self.team_A_goal_post),
                    'team_B_goal_post': util.change_int(self.team_B_goal_post),
                    'team_A_players': util.set_format(self.team_A_player_id_map, self.team_A_players),
                    'team_B_players': util.set_format(self.team_B_player_id_map, self.team_B_players)
                })
                print('frame_num', frame_num)
            else:
                cap.release()
        print('len(result) : ', result)
        result.update({'data': util.interpolation(defined_frame, result.get('data'))})
        print("done")
        return result
