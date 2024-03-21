from ultralytics import YOLO

def track(source, detector='yolov9e', tracker='bytetrack', conf = 0.15, iou=0.2, max_det=20):

    model_path = './models/'+detector+'.pt'
    model = YOLO(model_path)
    tracker = tracker+'.yaml'

    results = model.track(
        source=source,
        tracker=tracker,
        conf = conf,
        iou=iou,
        persist=True,
        max_det=max_det,
        show_labels=False,
        show_conf=False,
        show_boxes=False
    )

    return results