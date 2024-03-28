from ultralytics import YOLO


class track:
    def __init__(self, detector='yolov9e', tracker='bytetrack', conf=0.15, iou=0.2,
                 max_det=600):
        self.model = YOLO('./models/detector/' + detector + '.pt')
        self.tracker = './models/tracker/' + tracker + '.yaml'
        self.conf = conf
        self.iou = iou
        self.max_det = max_det

    def track(self, source):
        results = self.model.track(
            source=source,
            tracker=self.tracker,
            conf=self.conf,
            iou=self.iou,
            max_det=self.max_det,
            device=0,
            vid_stride=1,
            show=False,
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
        results = self.model.predict(
            source=source,
            conf=self.conf,
            iou=self.iou,
            device=0,
            max_det=self.max_det,
            vid_stride=1,
            augment=False,
            classes=0,
            show=False,
            save=False,
            show_labels=False,
            show_conf=False,
            show_boxes=False
        )
        return results
