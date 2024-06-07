import styled, { css } from "styled-components";

export enum ButtonVariant {
  Primary = "Primary",
  Secondary = "Secondary",
}

export interface ButtonProps {
  variant?: ButtonVariant;
  width?: string;
  height?: string;
  isInaccessible?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  min-width: ${(props) => props.width ?? "120px"};
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height ?? "44px"};
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

  &:hover {
    box-shadow: 6px 6px 0px ${(props) => props.theme.colors.primary};
  }

  ${(props) =>
    !props.isInaccessible &&
    css`
      &:focus {
        box-shadow: 6px 6px 0px ${(props) => props.theme.colors.primary};
      }
    `}
`;
