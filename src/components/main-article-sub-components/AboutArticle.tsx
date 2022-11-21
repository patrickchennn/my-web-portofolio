import {forwardRef,MutableRefObject,useRef,SyntheticEvent} from "react";
import cool_woman from "../../assets/kakkoii-onna.jpg";

const AboutArticle = forwardRef((_,articlesRef) => {
  const readMoreBlurRef = useRef<HTMLSpanElement>(null);
  const readMoreTxtRef = useRef<HTMLSpanElement>(null);

  const handleReadMoreBtnClick = (e: SyntheticEvent) => {
    console.log("show fuking txt")
    readMoreTxtRef.current!.classList.toggle("read-more-txt-show");
    readMoreBlurRef.current!.classList.toggle("read-more-blur-show");
    (e.currentTarget.textContent!=="Less...") ? e.currentTarget.textContent = "Less..." : e.currentTarget.textContent = "Read More...";

  };

  return (
    <article ref={(el: HTMLElement) => (articlesRef as MutableRefObject<HTMLElement[]>)!.current[0] = el} className="about-me-article">
      <h1 className="title">1. <span className="high-lighter">Regarding Me</span></h1>
      {/* <h2>What do I do mostly on tech.</h2> */}
      <div className="about-me">
        <div>
          <p>
            Hello my name is Patrick. I love to create and design, particularly, frontend stuffs. Bootstrap, tailwind, React are currently my repertoire for building a user interface website. I must, indeed, admit that having a little bit of knowledge and skill about designing is beneficial when it comes to actual implementation (coding), and I pick figma among many provided tools out there. Sometimes I work at the back-end accompanied by node js. My daily programming language, now, is javascript paired along with typescript, and I work as web developer mostly dealing with frontend.<span ref={readMoreBlurRef} className="read-more-blur"> I finally found, about specialization field, that I want to work on stuffs that related with the web. Well, it took quite some time to figure it out.</span><span ref={readMoreTxtRef} className="read-more-txt"> Back Then I was just doing random stuff on linux, cyber-security, ds & algo but at the end of the day I was bored with those things (probably the web is more friendly). I also have a little knowledge on python (no special reason why I reason learn this. It was just a pure curiosity, even so, eventually I found how this language is important for a certain fields), C (learn this because I need its knowledge in order to understand reverse engineering; binary exploitation stuffs), java (learn this because I want to become a android developer back then), c++ (used this language a lot when I learn ds & algo it gives me more freedom like printing the address of linked-list node, and saw how those nodes were connected with each other). Nonetheless, those are not really important now -- might go back though. -- me when 2022.</span>
            <button onClick={handleReadMoreBtnClick} className="read-more-btn">Read More...</button>
          </p>
        </div>
        <img src={cool_woman} alt="" />
      </div>
    </article>
  )
});

export default AboutArticle;