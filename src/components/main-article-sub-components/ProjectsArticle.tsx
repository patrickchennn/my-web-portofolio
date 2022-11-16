import spmbRedux from "../../assets/projects/spmb-redux.png";
import sortIllust from "../../assets/projects/sort-illust.mp4";
import { ArrowBarUp,ArrowBarBottom} from "../Icons";
import ProjectLink from "./ProjectLink";
import { useState,useRef } from "react";

export default function ProjectsArticle() {
  const [showOtherProject,setShowOtherProject] = useState(false);
  const projectOthersGridRef = useRef<null | HTMLDivElement>(null);

  const hanldeOtherProjectBtnClick = () => {
    setShowOtherProject(prev => !prev);
    projectOthersGridRef.current!.classList.toggle("show-other-project")
  };

  return (
    <article className="projects-article">
      {/* title article */}
      <h1 className="title">3. <span className="high-lighter">My Work</span></h1>

      {/* high-lighted/showed project */}
      <section className="project-high-lighted">
        <div>
          <div className="thumbnail">
            <video width="600" height="350" controls>
              <source src={sortIllust} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>
          <div className="project-high-lighted-desc">
            <h2>Demystifying The Sorting Algorithms</h2>
            <p>Further studies have shown that the majority of people are visual learners, and 65% people learn best through visuals. Given a decent amount of data, therefore, I think for people who want to understand how the sorting algorithm works it's not merely through reading a bunch line of code. Rather, let's put that crappy code into a some sort of motion picture related. Created with basic web technology which are html,css, and plain js.</p>
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
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga beatae alias nihil sint odio ex inventore ad hic adipisci sequi suscipit, doloremque quo vero qui quaerat amet officiis. Porro reprehenderit suscipit pariatur aperiam obcaecati libero quis esse minus ullam dicta deleniti vitae, voluptatem mollitia quas quia, omnis nam! Consectetur, voluptatum!</p>
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
}
