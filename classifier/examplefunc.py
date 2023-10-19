from torchvision.io import read_image, ImageReadMode, encode_png, write_file
from torchvision.models import resnet50, ResNet50_Weights
from torchvision.transforms import functional

def examplefunc():
  img = read_image("SurfacePro3.png", mode=ImageReadMode.RGB)

  #TODO: Make sure this caches and doesn't remake the model every time
  weights = ResNet50_Weights.DEFAULT
  model = resnet50(weights=weights)
  model.eval()

  cropped = functional.crop(img, 0, 0, 100, 100)

  preprocess = weights.transforms()

  batch = preprocess(cropped).unsqueeze(0)

  img_png = encode_png(cropped)
  write_file("./output.png", img_png)

  prediction = model(batch).squeeze(0).softmax(0)
  print(prediction)
  sorted_classes = prediction.argsort(descending=True)
  results = []
  for i in range(5):
    #class_id = prediction.argmax().item()
    class_id = sorted_classes[i]
    score = prediction[class_id].item()
    category_name = weights.meta["categories"][class_id]
    results.append(f"<li> {category_name}: {score} </li>")
  return "<ol>" + "\n".join(results) + "</ol>"