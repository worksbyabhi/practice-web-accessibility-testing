import styled from "styled-components";

export const StyledPrimaryNav = styled.nav`
  width: 100%;
  height: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  background: rgb(34, 36, 74);
  color: $body-background-color;
  display: flex;
  transition: all 0.5s;
  font-family: "Josefin Sans", sans-serif, Arial;
  backdrop-filter: blur(2px);
  border-bottom: 1px solid rgba(112, 112, 112, 0.5019607843);

  .logo-home-button {
    background: transparent;
    border: none;
    width: 3rem;
    outline: none;
    cursor: pointer;
    text-align: center;
    margin: auto 2rem;

    svg {
      width: 2.5rem;
      transition: all 0.5s;
    }

    &:hover svg,
    &:focus svg {
      transform: scale(1.2);
    }
  }

  a {
    display: flex;
    margin: auto;
  }
`;
