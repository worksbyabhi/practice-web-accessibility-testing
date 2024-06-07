import styled from "styled-components";
import { ButtonProps, ButtonVariant } from "./Button";

export const LinkButton = styled.a<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  font-size: 20px;
  padding: 0 1.5rem;
  border: none;
  background-color: ${(props) =>
    props.variant === ButtonVariant.Secondary
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.background};
  transition: all 0.5s;
  cursor: pointer;
  align-items: center;
  gap: 6px;

  svg {
    width: 1rem;
    height: 1rem;
    fill: ${(props) => props.theme.colors.background};
    transition: all 0.5s;
  }

  &:hover {
    box-shadow: 6px 6px 0px ${(props) => props.theme.colors.primary};

    svg {
      transform: translateX(4px);
    }
  }
`;
