import styled from "styled-components";

export const StyledForm = styled.form`
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export interface StyledInputProps {
  error?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  border: ${(props) =>
    props.error
      ? `1px solid ${props.theme.colors.primary}`
      : `1px solid ${props.theme.colors.error}`};
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const MandatoryStar = styled.span`
  display: inline-block;
  margin-left: 4px;
`;

export const FormFieldDescription = styled.span`
  font-size: 0.8rem;
  margin-bottom: 4px;
`;

export const FormFieldError = styled.span`
  display: flex;
  height: 20px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.error};
`;
