import React, { useState } from "react";
import "video-react/dist/video-react.css";
import { Player } from "video-react";

import {
  TextToGestureComponentOuterContainer,
  TextToGestureComponentVideoContainer,
  TextToGestureComponentButtonsContainer,
  TextToGestureComponentButton,
} from "./TextToGestureComponent.Styles";
import posterImage from "../../images/poster.PNG";
import alif from "../../gestures/alif.mp4";
import bay from "../../gestures/bay.mp4";
import CHAY from "../../gestures/CHAY.mp4";
import DAAL from "../../gestures/DAAL.mp4";
import dhaal from "../../gestures/dhaal.mp4";
import fay from "../../gestures/fay.mp4";
import gaaf from "../../gestures/gaaf.mp4";
import ghain from "../../gestures/ghain.mp4";
import hay from "../../gestures/hay.mp4";
import jeem from "../../gestures/jeem.mp4";
import kaaf from "../../gestures/kaaf.mp4";
import khay from "../../gestures/khay.mp4";
import laam from "../../gestures/laam.mp4";
import pay from "../../gestures/pay.mp4";
import qaf from "../../gestures/qaf.mp4";
import ray from "../../gestures/ray.mp4";
import rhay from "../../gestures/rhay.mp4";
import SAY from "../../gestures/SAY.mp4";
import seen from "../../gestures/seen.mp4";
import sheen from "../../gestures/sheen.mp4";
import swad from "../../gestures/swad.mp4";
import tay from "../../gestures/tay.mp4";
import thay from "../../gestures/thay.mp4";
import toway from "../../gestures/toway.mp4";
import zaal from "../../gestures/zaal.mp4";
import zay from "../../gestures/zay.mp4";
import zhay from "../../gestures/zhay.mp4";
import zoway from "../../gestures/zoway.mp4";
import zwad from "../../gestures/zwad.mp4";
import aeen from "../../gestures/aeen.mp4";

const gestures = [
  { name: "Alif", path: alif },
  { name: "Bay", path: bay },
  { name: "Chay", path: CHAY },
  { name: "Daal", path: DAAL },
  { name: "Dhaal", path: dhaal },
  { name: "Fay", path: fay },
  { name: "Gaaf", path: gaaf },
  { name: "Ghain", path: ghain },
  { name: "Hay", path: hay },
  { name: "Jeem", path: jeem },
  { name: "Kaaf", path: kaaf },
  { name: "Khay", path: khay },
  { name: "Laam", path: laam },
  { name: "Pay", path: pay },
  { name: "Zwad", path: zwad },
  { name: "Zoway", path: zoway },
  { name: "Zhay", path: zhay },
  { name: "Zay", path: zay },
  { name: "Zaal", path: zaal },
  { name: "Toway", path: toway },
  { name: "Thay", path: thay },
  { name: "Tay", path: tay },
  { name: "Swad", path: swad },
  { name: "Sheen", path: sheen },
  { name: "Seen", path: seen },
  { name: "Say", path: SAY },
  { name: "Rhay", path: rhay },
  { name: "Ray", path: ray },
  { name: "Qaf", path: qaf },
  { name: "Aeen", path: aeen },
];

export const TextToGestureComponent = () => {
  const [selectedGesture, setSelectedGesture] = useState(alif);

  const handleButtonClick = (path) => {
    setSelectedGesture(path);
  };
  return (
    <TextToGestureComponentOuterContainer>
      <TextToGestureComponentVideoContainer>
        <Player playsInline poster={posterImage} src={selectedGesture} />
      </TextToGestureComponentVideoContainer>

      <TextToGestureComponentButtonsContainer>
          {gestures.map((gesture) => (
            <TextToGestureComponentButton
              key={gesture.name}
              onClick={() => handleButtonClick(gesture.path)}
            >
              {gesture.name}
            </TextToGestureComponentButton>
          ))}
      </TextToGestureComponentButtonsContainer>
    </TextToGestureComponentOuterContainer>
  );
};
