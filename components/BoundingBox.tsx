import Corner from '@/components/Corner';
import { useState } from "react";

interface Props {
  height: number;
  width: number;
  bounds: {x1: number, y1: number, x2: number, y2: number};
  boundsChange: (topleft: boolean, x: number, y: number) => void;
}

const BoundingBox = ({ height, width, bounds, boundsChange }: Props) => {

  const leftLineStyle = {
    position: "absolute",
    left: bounds.x1,
    top: bounds.y1 - 2,
    "border-left": "solid #660000 2px",
    transform: "translate(-2px, 0px)",
    height: bounds.y2 - bounds.y1 - 2,
    width: 10
  } as const;

  const topLineStyle = {
    position: "absolute",
    left: bounds.x1 - 2,
    top: bounds.y1,
    "border-top": "solid #660000 2px",
    transform: "translate(0px, -2px)",
    height: 10,
    width: bounds.x2 - bounds.x1 - 2
  } as const;

  const rightLineStyle = {
    position: "absolute",
    left: bounds.x2,
    top: bounds.y1 - 2,
    "border-left": "solid #660000 2px",
    transform: "translate(-4px, 0px)",
    height: bounds.y2 - bounds.y1 - 2,
    width: 10
  } as const;

  const bottomLineStyle = {
    position: "absolute",
    left: bounds.x1 - 2,
    top: bounds.y2,
    "border-top": "solid #660000 2px",
    transform: "translate(0px, -4px)",
    height: 10,
    width: bounds.x2 - bounds.x1 - 2
  } as const;

  return (
    <div>
      <div className="bounding-box">
        <div style={leftLineStyle}></div>
        <div style={topLineStyle}></div>
        <div style={rightLineStyle}></div>
        <div style={bottomLineStyle}></div>
        <Corner 
          top={0}
          left={0}
          right={bounds.x2 - 10}
          bottom={bounds.y2 - 10}
          topleft={true}
          posx={bounds.x1}
          posy={bounds.y1}
          boundsChange={boundsChange}></Corner>
        <Corner
          top={bounds.y1 + 10}
          left={bounds.x1 + 10}
          right={width}
          bottom={height}
          topleft={false}
          posx={bounds.x2}
          posy={bounds.y2}
          boundsChange={boundsChange}></Corner>
      </div>
      <div className="box-debug">
        <p>Box stretches from ({bounds.x1}, {bounds.y1}) to ({bounds.x2}, {bounds.y2})</p>
      </div>
    </div>
  )
}

export default BoundingBox;