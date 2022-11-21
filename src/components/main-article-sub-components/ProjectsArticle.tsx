import spmbRedux from "../../assets/projects/spmb-redux.png";
import sortIllust from "../../assets/projects/sort-illust.mp4";
import { ArrowBarUp,ArrowBarBottom} from "../Icons";
import ProjectLink from "./ProjectLink";
import { forwardRef,useState,useRef,MutableRefObject, SyntheticEvent } from "react";

const ProjectsArticle = forwardRef((_, articlesRef) => {
  const readMoreBlurRef = useRef<HTMLSpanElement>(null);
  const readMoreTxtRef = useRef<HTMLSpanElement>(null);

  const [showOtherProject,setShowOtherProject] = useState(false);
  const projectOthersGridRef = useRef<null | HTMLDivElement>(null);
  
  const handleReadMoreBtnClick = (e: SyntheticEvent) => {
    console.log("show fuking txt")
    readMoreTxtRef.current!.classList.toggle("read-more-txt-show");
    readMoreBlurRef.current!.classList.toggle("read-more-blur-show");
    (e.currentTarget.textContent!=="Less...") ? e.currentTarget.textContent = "Less..." : e.currentTarget.textContent = "Read More...";
  };

  const hanldeOtherProjectBtnClick = () => {
    setShowOtherProject(prev => !prev);
    projectOthersGridRef.current!.classList.toggle("show-other-project")
  };

  return (
    <article ref={(el: HTMLElement) => (articlesRef as MutableRefObject<HTMLElement[]>)!.current[2] = el} className="projects-article">
      {/* title article */}
      <h1 className="title">3. <span className="high-lighter">My Work</span></h1>

      {/* high-lighted/showed project */}
      <section className="project-high-lighted">
        <div>
          <div className="thumbnail">
            <video width="600" height="auto" controls>
              <source src={sortIllust} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>
          <div className="project-high-lighted-desc">
            <h2>Demystifying The Sorting Algorithms•</h2>
            <p>Further studies have shown that the majority of people are visual learners, and 65% people learn best through visuals. Given a decent amount of data, therefore, I think for people who want to understand how the sorting algorithm works it's not merely through reading a bunch line of code. Rather, let's put that crappy code into a some sort of motion picture related. Created with basic web technology which are html,css, and java script.</p>
            <div>
              <div className="technology-used">
                <code className="pill">HTML</code>
                <code className="pill">CSS</code>
                <code className="pill">Vanilla JS</code>
              </div>
              <ProjectLink demoAppLink="https://sort-illust.netlify.app/" codeLink="https://github.com/patrickchennn/sort-illust"/>
            </div>
          </div>
        </div>

        <div>
          <div className="thumbnail">
            <img src={spmbRedux} alt="shasin" className="spmb-redux"/>
          </div>
          <div className="project-high-lighted-desc">
            <h2>Login Form•</h2>
            <p>
              My first fullstack web-app created with MERN Stack. It is a login and miscellaneous data from. In fact, it is true that it's just a simple plain form that demands data from the user. I learned a lot, however, from this simple fullstack project some of them there are: implementing JWT token with expiration check, create RestAPI with express js, send data from UI to database, and one by one validate the data, fetch data from database and display it to the UI. <span ref={readMoreBlurRef} className="read-more-blur"> Critical questions such as--these are just a few: </span>
              <span ref={readMoreTxtRef} className="read-more-txt">
                Does the user give the correct email? 
                Does the user enter a number where the form demands a number not text?
                Does the user submit a picture is indeed a picture (jpg,png,jpeg,... Not a txt,cpp,js,...)?
                If the user enters the wrong data, how can I inform the user? How can I design the success/failed inserted data in an aesthetic and simple way?
                How can I maintain the user login (jwt token), and check if the token expired, how can I implement an automatic logout functionality? are all answered by researching and applied carefully. Took 1 month to finish this. Some of the technology is mostly new when I create this except react,bootstrap,expressJS.
              </span>
              
                <button onClick={handleReadMoreBtnClick} className="read-more-btn">Read More...</button>
              </p>


            <div>
              <div className="technology-used">
                <code className="pill">Bootstrap</code>
                <code className="pill">JWT</code>
                <code className="pill">MERN stack</code>
                <code className="pill">Redux</code>
              </div>
              <ProjectLink demoAppLink="https://spmb-redux.herokuapp.com/" codeLink="https://github.com/patrickchennn/spmb-redux"/>
            </div>
          </div>
        </div>
      </section>


      {/* other projects */}
      <section className="project-others">
        <div className="project-show-more-btn-container">
          <button onClick={hanldeOtherProjectBtnClick}>
            Other projects that is worth to look
            { showOtherProject ? <ArrowBarUp /> : <ArrowBarBottom /> }
          </button>
        </div>


        <div ref={projectOthersGridRef} className="project-others-grid">
          <div className="left">
            {/* card */}
            <div className="project-other-card">
              <img src="https://source.unsplash.com/random/?people" alt="" />
              <div className="project-other-card-desc-container">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda illo fuga consectetur neque doloribus perferendis sapiente repellat velit quas laboriosam?</p>
                <div className="project-other-card-footer">
                  <div className="technology-used">
                    <code className="pill">React</code>
                    <code className="pill">Node.js</code>
                  </div>
                  <ProjectLink demoAppLink="#" codeLink="#"/>
                </div>
              </div>
            </div>

            {/* card */}
            <div className="project-other-card">
              <img src="https://source.unsplash.com/random/?animal" alt="" />
              <div className="project-other-card-desc-container">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda illo fuga consectetur neque doloribus perferendis sapiente repellat velit quas laboriosam?</p>
                <div className="project-other-card-footer">
                  <div className="technology-used">
                    <code className="pill">React</code>
                    <code className="pill">Node.js</code>
                  </div>
                  <ProjectLink demoAppLink="#" codeLink="#"/>
                </div>
              </div>
            </div>
          </div>

          <div className="mid">
            {/* card */}
            <div className="project-other-card">
              <img src="https://source.unsplash.com/random/?water" alt="" />
              <div className="project-other-card-desc-container">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda illo fuga consectetur neque doloribus perferendis sapiente repellat velit quas laboriosam?</p>
                <div className="project-other-card-footer">
                  <div className="technology-used">
                    <code className="pill">React</code>
                    <code className="pill">Node.js</code>
                  </div>
                  <ProjectLink demoAppLink="#" codeLink="#"/>
                </div>
              </div>
            </div>

            {/* card */}
            <div className="project-other-card">
              <img src="https://source.unsplash.com/random/?fire" alt="" />
              <div className="project-other-card-desc-container">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda illo fuga consectetur neque doloribus perferendis sapiente repellat velit quas laboriosam?</p>
                <div className="project-other-card-footer">
                  <div className="technology-used">
                    <code className="pill">React</code>
                    <code className="pill">Node.js</code>
                  </div>
                  <ProjectLink demoAppLink="#" codeLink="#"/>
                </div>
              </div>
            </div>
          </div>


          <div className="right">
            {/* card */}
            <div className="project-other-card">
              <img src="https://source.unsplash.com/random/?abstract" alt="" />
              <div className="project-other-card-desc-container">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda illo fuga consectetur neque doloribus perferendis sapiente repellat velit quas laboriosam?</p>
                <div className="project-other-card-footer">
                  <div className="technology-used">
                    <code className="pill">React</code>
                    <code className="pill">Node.js</code>
                  </div>
                  <ProjectLink demoAppLink="#" codeLink="#"/>
                </div>
              </div>
            </div>

            {/* card */}
            <div className="project-other-card">
              <img src="https://source.unsplash.com/random/?forest" alt="" />
              <div className="project-other-card-desc-container">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda illo fuga consectetur neque doloribus perferendis sapiente repellat velit quas laboriosam?</p>
                <div className="project-other-card-footer">
                  <div className="technology-used">
                    <code className="pill">React</code>
                    <code className="pill">Node.js</code>
                  </div>
                  <ProjectLink demoAppLink="#" codeLink="#"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
})

export default ProjectsArticle;