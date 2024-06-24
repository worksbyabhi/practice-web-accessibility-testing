import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: #eee;
  font-size: 14px;
  text-align: center;
  background: ${(props) => props.theme.colors.primary};

  a {
    color: white;
    letter-spacing: 2px;

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
      fill: ${(props) => props.theme.colors.background};
      height: 16px;
      width: 16px;
      transition: all 0.5s;
    }
  }
`;

export const DividerLine = styled.span`
  height: 2px;
  width: 100%;
  background: ${(props) => props.theme.colors.background};
`;
