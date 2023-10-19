import Draggable, {DraggableEvent} from "react-draggable";
import { useState } from "react";

interface Props {
  top: number;
  left: number;
  right: number;
  bottom: number;
  topleft: boolean;
  posx: number;
  posy: number;
  boundsChange: (topleft: boolean, x: number, y: number) => void;
  onStop: () => void;
}

const Corner = ({ top, left, right, bottom, topleft, posx, posy, boundsChange, onStop }: Props) => {

  const controlledDrag = (e: DraggableEvent, position: {x: number, y: number}) => {
    const {x, y} = position;
    boundsChange(topleft, x, y);
  };

  const pipStyle = {
    transform: topleft ? "translate(-6px, -6px)" : "translate(-8px, -8px)",
  } as const;

  return (
    <Draggable 
    position={{x: posx, y: posy}}
    onDrag={controlledDrag}
    onStop={onStop}
    bounds={{
      top: top,
      left: left,
      right: right,
      bottom: bottom
    }}
  >
    <div className="corner">
      <div className="corner-pip" style={pipStyle}></div>
    </div>
  </Draggable>
  )
}

export default Corner;