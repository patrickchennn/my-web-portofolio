import "../styles/top-nav.scss";
import heterochromia from "../assets/heterochromia.png";
import React, { useEffect, useRef, useState } from "react";
import { useWindowScrollPositions } from "../hooks/useWindowScrollPositions";

export default function TopNav(){
  const navLineAnimationRef = useRef<null | HTMLLIElement>(null);
  const topNavRef = useRef<null | HTMLDivElement>(null);
  const [direction,setDirection] = useState(window.screenY);

  const [navLineAnimationProperties, setNavLineAnimationProperties] = useState({
    leftDef:0,
    widthDef:0,
    calcPosition:0,
    calcWidth:0,
    isFirstTimeClick: true
  })
  const { scrollY } = useWindowScrollPositions()

  useEffect(() => {
    const topNav = topNavRef.current!;
    // remove the "px", and covert it into a number data type
    let top: number = Number( topNav.style.top.slice(0, topNav.style.top.lastIndexOf("px")) );
    // console.log(`scrollY: ${scrollY}, offsetHeight: ${topNav.offsetHeight}, top:${top}`);

    // if the user scroll to down
    // the inner conditional statements is all about restricting how far should the topNav move.
    if(scrollY>direction){
      // if the topnav is 
      if(top<=-topNav.offsetHeight) {
        top=-topNav.offsetHeight
      }else{
        top -= 6;
      }
      topNav.style.top = top + "px";
      // console.log("sroll to DOWN")
    }
    // if the user scroll to up
    else if(scrollY<direction){
      if(top>=0){
        top=0 

      }else{
        top += 6;
      }
      topNav.style.top = top + "px";
      // console.log("sroll to UP")
    }
    // update the current scrollY value to the newest. Ex: 0-->9; 9-->20; 20-->90; ...
    setDirection(scrollY)
    // eslint-disable-next-line
  },[scrollY])

  // console.log(`Scroll position is (${scrollX}, ${scrollY})`)
  const handleMouseHover = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLElement;
    if(target.nodeName==="LI" || target.nodeName==="SPAN"){
      const navLineAnimation = navLineAnimationRef.current!;
      // console.log(`${target.textContent} is hovered!`);

      // show the line
      navLineAnimation.style.display = "block";
      
      // // update the values
      // setNavLineAnimationProperties(prev => ({
      //   ...prev,
      //   calcWidth: target.offsetWidth,
      //   calcPosition: target.offsetLeft
      // }))

      navLineAnimationProperties.calcWidth = target.offsetWidth;
      navLineAnimationProperties.calcPosition = target.offsetLeft;

      // adjust the width
      navLineAnimation.style.width = `${navLineAnimationProperties.calcWidth}px`;

      // adjust the coordinate
      navLineAnimation.style.left = `${navLineAnimationProperties.calcPosition}px`;

    }
  };

  const handleClick = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLElement;
    if(target.nodeName==="LI" || target.nodeName==="SPAN"){
      const navLineAnimation = navLineAnimationRef.current!;

      // console.log(`${target.textContent} is clicked!`);

      // make the menu line fixed place according to where it gets clicked
      navLineAnimation.style.width = `${navLineAnimationProperties.calcWidth}px`;
      navLineAnimation.style.left = `${navLineAnimationProperties.calcPosition}px`;

      // navLineAnimationProperties.widthDef = navLineAnimationProperties.calcWidth;
      // navLineAnimationProperties.leftDef = navLineAnimationProperties.calcPosition;
      // navLineAnimationProperties.isFirstTimeClick=false;

      // update the values
      setNavLineAnimationProperties(prev => ({
        ...prev,
        widthDef: prev.calcWidth,
        leftDef: prev.calcPosition,
        isFirstTimeClick: false
      }))
    }
  };

  const handleLeave = (e: React.SyntheticEvent) => {
    // const target = e.target as HTMLElement;
    // console.log(`${currTarget} is leaving!`);
    const navLineAnimation = navLineAnimationRef.current!;

    // *if the user have not click anything in the algo picker, remove the line animation.

    if(navLineAnimationProperties.isFirstTimeClick===true){
      navLineAnimation.style.display = "none"
    }
    
    // but we will maintain where is the last hovered element
    navLineAnimation.style.width = navLineAnimationProperties.widthDef + "px";
    navLineAnimation.style.left = navLineAnimationProperties.leftDef + "px";
  };


  return(
    <div ref={topNavRef} className="top-nav-container">
      <img src={heterochromia} alt="home-btn" className="home-btn"/>
      <nav className="top-nav">
        <ul onMouseOver={handleMouseHover} onClick={handleClick} onMouseLeave={handleLeave}>
          <li>1. <span>About</span></li>
          <li>2. <span>Experience</span></li>
          <li>3. <span>Projects</span></li>
          <li>4. <span>Contact</span></li>
          <li ref={navLineAnimationRef} className="nav-line-animation"></li>
        </ul>
        <li><button className="resume-btn">Resume</button></li>
      </nav>
    </div>
  );
}
