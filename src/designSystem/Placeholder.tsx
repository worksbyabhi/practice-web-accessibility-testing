import styled from "styled-components";

export interface PlaceholderProps {
  height?: string;
}

export const Placeholder = styled.span<PlaceholderProps>`
  display: flex;
  width: 100%;
  height: ${(props) => props.height ?? "8rem"};
`;
