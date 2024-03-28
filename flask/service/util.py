
class post_processing_manager:
    def __init__(self):
        self.team_A_players = []
        self.team_B_players = []
        self.team_A_goal_post = {}
        self.team_B_goal_post = {}
        self.field = {}
        self.player_id_map = {}

    def get_position(self, box):
        if box == None:
            return -1
        return box.get('x1') + (box.get('x2') - box.get('x1')), box.get('y1') + (box.get('y2') - box.get('y1'))


    def get_mapped_id(self, origin_id) -> int:
        return self.player_id_map.get(str(origin_id))


    def is_in_area(self, position, margin_x, margin_y):
        if position.get('x1') < self.field.get('x1') - margin_x or position.get('x2') > self.field.get(
                'x2') + margin_x or position.get('y1') < self.field.get('y1') - margin_y or position.get('y2') > self.field.get(
                'y2') + margin_y:
            return False
        return True


    def get_distance(self, obj1, obj2):
        obj1_position = obj1.get('box')
        obj2_position = obj2.get('box')
        return ((obj1_position[0] - obj2_position[0]) ** 2 + (obj1_position[1] - obj2_position[1]) ** 2) ** (1 / 2)


    def calc_iou(self, obj1, obj2):
        intersection_x1 = max(obj1.get('x1'), obj2.get('x1'))
        intersection_x2 = min(obj1.get('x2'), obj2.get('x2'))
        intersection_y1 = max(obj1.get('y1'), obj2.get('y1'))
        intersection_y2 = min(obj1.get('y2'), obj2.get('y2'))

        intersection = max(0, intersection_x2 - intersection_x1) * max(0, intersection_y2 - intersection_y1)

        box1_area = abs((obj1.get('x2') - obj1.get('x1')) * (obj1.get('y2') - obj1.get('y1')))
        box2_area = abs((obj2.get('x2') - obj2.get('x1')) * (obj2.get('y2') - obj2.get('y1')))
        return intersection / (box1_area + box2_area - intersection + 1e-7)
