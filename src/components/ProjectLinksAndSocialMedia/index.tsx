import { LinkSame } from "@/assets/svg";
import { ProjectLinksAndSocialMediaContainer } from "./style";

export const ProjectLinksAndSocialMedia = ({ as }: { as?: string }) => {
  return (
    <ProjectLinksAndSocialMediaContainer
      aria-label="Project links and social media"
      as={as ? as : "aside"}
    >
      <h2 id="projectLinks">Project Links</h2>
      <ul>
        <li>
          <a
            href="https://github.com/worksbyabhi/practice-web-accessibility-testing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View in github <LinkSame />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@worksbyabhi"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Series <LinkSame />
          </a>
        </li>
      </ul>
      <h2 id="socialLinks">Social Media Links</h2>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/worksbyabhi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <LinkSame />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/worksbyabhi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <LinkSame />
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@worksbyabhi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium <LinkSame />
          </a>
        </li>
      </ul>
    </ProjectLinksAndSocialMediaContainer>
  );
};
