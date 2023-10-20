from torchvision.io import read_image, ImageReadMode, encode_png, write_file
from torchvision.models import resnet50, ResNet50_Weights
from torchvision.transforms import functional
from flask import jsonify

def get_path(imgname):
  if imgname == "animals":
    return "../images/farm-animals.jpeg"
  elif imgname == "furniture":
    return "../images/furniture.jpg"
  elif imgname == "vegetables":
    return "../images/vegetables.jpg"

def examplefunc(x1, x2, y1, y2, imgname):

  img = read_image(get_path(imgname), mode=ImageReadMode.RGB)

  #TODO: Make sure this caches and doesn't remake the model every time
  weights = ResNet50_Weights.DEFAULT
  model = resnet50(weights=weights)
  model.eval()

  cropped = functional.crop(img, y1, x1, y2-y1, x2-x1)

  preprocess = weights.transforms()

  batch = preprocess(cropped).unsqueeze(0)

  img_png = encode_png(cropped)
  write_file("./output.png", img_png)

  prediction = model(batch).squeeze(0).softmax(0)
  #print(prediction)
  sorted_classes = prediction.argsort(descending=True)
  results = []
  for i in range(5):
    #class_id = prediction.argmax().item()
    class_id = sorted_classes[i]
    score = prediction[class_id].item()
    category_name = weights.meta["categories"][class_id]
    results.append(f"{category_name}: {score}")
  return jsonify({"message": "Data received", "data": ", ".join(results)})