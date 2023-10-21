from torchvision.io import read_image, ImageReadMode, encode_png, write_file
from torchvision.models import (
  resnet50, ResNet50_Weights,
  alexnet, AlexNet_Weights
)
from torchvision.transforms import functional
from flask import jsonify

def get_path(imgname):
  if imgname == "animals":
    return "../images/farm-animals.jpeg"
  elif imgname == "furniture":
    return "../images/furniture.jpg"
  elif imgname == "vegetables":
    return "../images/vegetables.jpg"

def classify_input(x1, x2, y1, y2, imgname, model):

  img = read_image(get_path(imgname), mode=ImageReadMode.RGB)

  cropped = functional.crop(img, y1, x1, y2-y1, x2-x1)

  #img_png = encode_png(cropped)
  #write_file("./output.png", img_png)
  print(model)
  if model == "resnet":
    weights = ResNet50_Weights.DEFAULT
    model = resnet50(weights=weights)
  elif model == "alexnet":
    weights = AlexNet_Weights.DEFAULT
    model = alexnet(weights=weights)
  else:
    return {}, 404
  
  model.eval()

  preprocess = weights.transforms()
  batch = preprocess(cropped).unsqueeze(0)

  prediction = model(batch).squeeze(0).softmax(0)
  sorted_classes = prediction.argsort(descending=True)
  results = []
  for i in range(5):
    #class_id = prediction.argmax().item()
    class_id = sorted_classes[i]
    score = prediction[class_id].item()
    category_name = weights.meta["categories"][class_id]
    results.append(f"{category_name}: {score}")
  return jsonify({"message": "Data received", "data": ", ".join(results)})