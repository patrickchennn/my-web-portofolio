import { BoxArrowUpRight, FileEarmarkCode } from "../Icons";

interface ProjectLinkProps{
  demoAppLink: string,
  codeLink: string
}
export default function ProjectLink({demoAppLink,codeLink}: ProjectLinkProps){
  return (
    <nav className="project-link">
      <a className="tooltip" href={demoAppLink} rel="noreferrer" target="_blank">
        <BoxArrowUpRight />
        <span className="tooltip-txt">Demo app</span>
      </a>
      <a className="tooltip" href={codeLink} rel="noreferrer" target="_blank">
        <FileEarmarkCode />
        <span className="tooltip-txt">Code</span>
      </a>
    </nav>
  );
}