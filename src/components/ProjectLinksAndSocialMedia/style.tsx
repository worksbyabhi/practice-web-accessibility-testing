import styled from "styled-components";

export const ProjectLinksAndSocialMediaContainer = styled.aside`
  border-left: 1px solid ${(props) => props.theme.colors.secondary};
  width: 280px;
  flex-shrink: 0;
  padding-left: 1rem;
  padding-right: 1rem;

  h2 {
    margin-top: 2rem;
    font-size: 20px;
    text-align: left;
    border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  }

  ul {
    list-style-type: none;

    a {
      display: flex;
      align-items: center;
      gap: 6px;
      color: ${(props) => props.theme.colors.secondary};

      i {
        display: inline-flex;
        gap: 8px;
        align-items: center;
      }

      &:hover svg,
      &:focus svg {
        transform: rotate(-40deg);
      }

      svg {
        fill: ${(props) => props.theme.colors.secondary};
        height: 16px;
        width: 16px;
        transition: all 0.5s;
      }
    }
  }
`;
