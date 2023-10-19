interface Props {
  setModel: (img: string) => void
}

const ModelSelector = ({ setModel }: Props) => {
  const models = [
    {label: "AlexNet", model: "alexnet", key: 0},
    {label: "ResNet50", model: "resnet", key: 1}
  ]

  return (
    <div className="selector text-bar">
      <p>Choose a model:</p>
      {models.map(model => {
        return <button
          className="model-button"
          alt={"Button for " + model.label}
          onClick={() => setModel(model.model)}
        >
          <p>{model.label}</p>
        </button>
      })}
    </div>
  )
}

export default ModelSelector;