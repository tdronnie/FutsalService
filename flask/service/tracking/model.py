from ultralytics import YOLO


class model:
    def __init__(self, ball_detector='20240401_v8x_1024_1000_last_best',tracking_detector='20240328_dataset2_yolov9e_b6000+n1000_best', tracker='bytetrack', max_det=800):
        self.ball_detector = YOLO('./service/tracking/models/detector/' + ball_detector + '.pt')
        self.tracking_detector = YOLO('./service/tracking/models/detector/' + tracking_detector + '.pt')
        self.tracker = './service/tracking/models/tracker/' + tracker + '.yaml'
        self.max_det = max_det

    def track(self, source):
        results = self.tracking_detector.track(
            source=source,
            imgsz=640,
            tracker=self.tracker,
            conf=0.4,
            iou=0.2,
            max_det=self.max_det,
            device=0,
            vid_stride=1,
            show=False,
            augment=False,
            classes=[1, 2, 3],
            persist=True,
            save=False,
            save_frames=False,
            save_txt=False,
            save_conf=False,
            save_crop=False,
            show_labels=False,
            show_conf=False,
            show_boxes=False
        )
        return results

    def detect(self, source):
        results = self.ball_detector.predict(
            source=source,
            imgsz=1024,
            conf=0.1,
            iou=0.1,
            device=0,
            max_det=self.max_det,
            vid_stride=1,
            augment=True,
            classes=0,
            show=False,
            save=False,
            show_labels=False,
            show_conf=False,
            show_boxes=False
        )
        return results
