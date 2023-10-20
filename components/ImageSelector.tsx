import { animalPreview, furniturePreview, vegetablePreview } from "@/app/previews"

interface Props {
  setImage: (img: string) => void
}

const ImageSelector = ({ setImage }: Props) => {
  const imagePreviews = [
    {label: "animals", img: animalPreview, key: 0},
    {label: "furniture", img: furniturePreview, key: 1},
    {label: "vegetables", img: vegetablePreview, key: 2}
  ]

  return (
    <div className="image-selector">
      {imagePreviews.map(image => {
        return <img
          className="preview-image"
          src={image.img.src}
          alt="A preview image"
          onClick={() => setImage(image.label)}
        ></img>
      })}
    </div>
  )
}

export default ImageSelector;