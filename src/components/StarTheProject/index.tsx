import { GithubStar } from "@/assets/svg";
import styled from "styled-components";

export const StyledStar = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  animation: rotateStar 2s linear infinite;

  @keyframes rotateStar {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;

export const StyledStarParagraph = styled.p`
  font-size: 1rem;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 8px;
  gap: 8px;
`;

export const StyledStarLink = styled.a`
  border-bottom: 1px solid ${(props) => props.theme.colors.textPrimary};
  &:visited {
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

export const StarTheProject = () => {
  return (
    <StyledStarParagraph>
      <StyledStar>
        <GithubStar />
      </StyledStar>
      If you find this project useful,{" "}
      <StyledStarLink
        href="https://github.com/worksbyabhi/svg-to-jsx-tsx"
        target="_blank"
        rel="noopener noreferrer"
      >
        please consider giving a star on GitHub!
      </StyledStarLink>
    </StyledStarParagraph>
  );
};
