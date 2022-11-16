import React, { useEffect, useRef, useState } from "react";

export default function ExperienceArticle(){
  const experienceDetailRef = useRef<null | HTMLDivElement>(null);
  const experienceListRef = useRef<null | HTMLUListElement>(null);
  const [prevIdx, setPrevIdx] = useState(0);

  useEffect(() => {
    (experienceListRef.current!.children[0] as HTMLElement).style.borderLeftColor = "#6290df";
    (experienceListRef.current!.children[0] as HTMLElement).style.backgroundColor = "#0085f230";

    (experienceDetailRef.current!.children[0] as HTMLElement).style.display = "block";
  },[])

  const handleExperienceListClick = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLElement;
    if(target.nodeName==="LI"){
      const experienceDetail: HTMLDivElement = experienceDetailRef.current!;
      console.log(target.textContent)

      experienceListRef.current!.children[prevIdx].removeAttribute("style");
      (experienceDetailRef.current!.children[prevIdx] as HTMLElement).style.display = "none";

      for(let i=0; i<experienceDetail.childElementCount; i++){
        const childOfExperienceDetail = experienceDetail.children[i] as HTMLDivElement;
        if(target.textContent===childOfExperienceDetail.className){
          target.style.borderLeftColor = "#6290df";
          target.style.backgroundColor = "#0085f230";
          childOfExperienceDetail.style.display = "block";
          setPrevIdx(i);
        }
      }
    }
  };

  return(
    <article className="experience-article">
      <h1 className="title">2. <span className="high-lighter">Experience</span></h1>
      <div className="experience-container">
        <ul ref={experienceListRef} onClick={handleExperienceListClick} className="experience-list">
          <li>qwerty</li>
          <li>asdfg</li>
          <li>zcxvb</li>
          <li>12345</li>
          <li>poiu</li>
        </ul>

        <div ref={experienceDetailRef} className="experience-detail">
          <div className="qwerty">
            <h2>Frontend at qwerty</h2>
            <h3>2012-2014</h3>
            <ul className="experience-contribution">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam rerum voluptates repellat nobis? Blanditiis quae voluptatem sequi exercitationem aliquam!</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis debitis rerum aut aliquam odit perferendis error ipsam a illo.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis debitis rerum aut aliquam odit perferendis error ipsam a illo.</li>
            </ul>
          </div>

          <div className="asdfg">
            <h2>Frontend at asdfg</h2>
            <h3>2012-2014</h3>
            <ul className="experience-contribution">
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis debitis rerum aut aliquam odit perferendis error ipsam a illo.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis debitis rerum aut aliquam odit perferendis error ipsam a illo.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis debitis rerum aut aliquam odit perferendis error ipsam a illo.</li>
            </ul>
          </div>

          <div className="zcxvb">
            <h2>Frontend at zcxvb</h2>
            <h3>2012-2014</h3>
            <ul className="experience-contribution">
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis debitis rerum aut aliquam odit perferendis error ipsam a illo.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis debitis rerum aut aliquam odit perferendis error ipsam a illo.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis debitis rerum aut aliquam odit perferendis error ipsam a illo.</li>
            </ul>
          </div>

          <div className="12345">
            <h2>Frontend at 12345</h2>
            <h3>2012-2014</h3>
            <ul className="experience-contribution">
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis debitis rerum aut aliquam odit perferendis error ipsam a illo.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis debitis rerum aut aliquam odit perferendis error ipsam a illo.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis debitis rerum aut aliquam odit perferendis error ipsam a illo.</li>
            </ul>
          </div>

          <div className="poiu">
            <h2>Frontend at poiu</h2>
            <h3>2012-2014</h3>
            <ul className="experience-contribution">
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis debitis rerum aut aliquam odit perferendis error ipsam a illo.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis debitis rerum aut aliquam odit perferendis error ipsam a illo.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quis debitis rerum aut aliquam odit perferendis error ipsam a illo.</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}