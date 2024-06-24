import Link from "next/link";
import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  height: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.background};
  display: flex;
  transition: all 0.5s;
  font-family: "Josefin Sans", sans-serif, Arial;
  backdrop-filter: blur(2px);
  align-items: center;
  padding: 0 2rem 0 1.5rem;

  .logo-home-button {
    background: transparent;
    border: none;
    width: 6rem;
    outline: none;
    cursor: pointer;
    text-align: center;
    margin: auto;

    svg {
      width: 50px;
      height: 50px;
    }
  }

  .placeholder-div {
    flex-grow: 1;
    min-width: 4rem;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      list-style-type: none;
      margin-right: 60px;
      position: relative;
      padding: 10px 0 5px;
      min-width: 70px;

      @media only screen and (max-width: 480px) {
        margin-right: 15px;
      }

      a {
        color: ${(props) => props.theme.colors.background};
        display: flex;
        height: 28px;
        align-items: center;

        @media only screen and (max-width: 480px) {
          font-size: 1rem;
        }
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${(props) => props.theme.colors.tertiary};
        transform-origin: left;
        transform: scaleX(0);
        transition: all 1s;
      }

      &::after {
        bottom: 0;
      }

      &:hover::after {
        transform: scaleX(0.7);
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover,
  &:focus {
    border-bottom: 1px solid #f5f5f5;

    svg {
      transform: translateX(4px);
    }
  }

  svg {
    width: 1rem;
    height: 1rem;
    fill: ${(props) => props.theme.colors.background};
    transition: all 0.5s;
  }
`;

export const StyledHomeLink = styled(Link)`
  width: 4rem;
  height: 4rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 3rem;
    height: 3rem;
    transition: all 0.5s;
  }

  &:hover svg,
  &:focus svg {
    transform: scale(1.2);
  }
`;
