import "../styles/main-article.scss";
import QuickLink from './QuickLink';
import ExperienceArticle from "./main-article-sub-components/ExperienceArticle";
import AboutArticle from "./main-article-sub-components/AboutArticle";
import ProjectsArticle from "./main-article-sub-components/ProjectsArticle";
import ContactArticle from "./main-article-sub-components/ContactArticle";
import React from "react";

const MainArticle = React.forwardRef((_, articlesRef) => {

  return (
    <main className="main-article-container">
      <AboutArticle ref={articlesRef}/>
      <ExperienceArticle ref={articlesRef}/>
      <ProjectsArticle ref={articlesRef}/>
      <ContactArticle ref={articlesRef}/>
      
      <QuickLink />
    </main>
  )
});

export default MainArticle;