import "../styles/main-article.scss";
import QuickLink from './QuickLink';
import ExperienceArticle from "./main-article-sub-components/ExperienceArticle";
import AboutArticle from "./main-article-sub-components/AboutArticle";
import ProjectsArticle from "./main-article-sub-components/ProjectsArticle";
import ContactArticle from "./main-article-sub-components/ContactArticle";

export default function MainArticle(){


  return (
    <main className="main-article-container">
      <AboutArticle />
      <ExperienceArticle />
      <ProjectsArticle />
      <ContactArticle />
      
      <QuickLink />
    </main>
  )
}