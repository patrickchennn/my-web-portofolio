import "../styles/home-page.scss"
import kanagawa from "../assets/kanagawa.png"
import kanagawa_transparent from "../assets/kanagawa_transparent.png";
import React, { useState,useRef, useEffect } from "react";
import {LeftRightArrow} from "./Icons";

export default function HomePage(){
  const [isClicked,setIsClicked] = useState(false);

  const sliderContainerRef = useRef<null | HTMLDivElement>(null);
  const kanagawaRef = useRef<null | HTMLImageElement>(null);


  useEffect(() => {
    // throw the both elements to the right most
    sliderContainerRef.current!.style.right = -(window.screen.width-35) + "px";
    kanagawaRef.current!.style.clipPath = `inset(0px 0px 0px ${window.screen.width}px)`;
    // note 1
    window.addEventListener('mouseup', function(){
      setIsClicked(false);
    })
  },[])



  const onClickSlide = () => {
    setIsClicked(true);
  };

  // this is not enough because when the user move theirs mouse faster than, when, the .slider-container resizing, this won't be executed anymore. The reason is, probably, this is my own reasoning, the cursor is out from the button. So it assumes the event is no longer attached. Therefore, this won't be executed. Look at note 1 for the solution.
  const onReleaseSlide = () => {
    setIsClicked(false);
  };

  const trackMousePointer = (e: React.MouseEvent) => {
    let x: number = e.clientX;
    const sliderContainer: HTMLDivElement= sliderContainerRef.current!;
    const calc: number = sliderContainer.offsetLeft-(sliderContainer.offsetLeft-x);


    // console.log(`clientX ${x}; sliderContainer.offsetLeft: ${sliderContainer.offsetLeft} ${calc}`);
    if(isClicked){
      sliderContainer.style.right = `${-calc}px`;
      kanagawaRef.current!.style.clipPath = `inset(0px 0px 0px ${calc-1}px)`;
    }
  };


  return(
    <div className="home-page" onMouseMoveCapture={trackMousePointer}>
      {/* <div className="kanagawa"></div> */}
      <img ref={kanagawaRef} src={kanagawa} className="kanagawa-inline white" alt="The Great Wave off Kanagawa by Hokusai" />
      <img src={kanagawa_transparent} className="kanagawa-inline transparent" alt="The Great Wave off Kanagawa by Hokusai" />

      <div ref={sliderContainerRef} className="slider-container">
        <button className="slide-btn" onMouseDown={onClickSlide} onMouseUp={onReleaseSlide}>
          <LeftRightArrow />
        </button>
      </div>
    </div>
  )
}

/* Notes
1. https://stackoverflow.com/questions/11533098/how-to-catch-mouse-up-event-outside-of-element
*/