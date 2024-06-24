import React from "react";
import { StyledHomeLink, StyledLink, StyledNav } from "./style";
import { HomeSVG } from "./HomeSVG";
import { LinkSame } from "@/assets/svg";

export interface NavBarProps {
  as?: string;
  isValid?: boolean;
}

export const NavBar = (props: NavBarProps) => {
  return (
    <StyledNav as={props.as ?? ""} aria-label="Demo">
      <StyledHomeLink href={"/"} aria-label={props.isValid ? "Go to home" : ""}>
        <HomeSVG />
      </StyledHomeLink>
      <div style={{ flexGrow: 1 }} />
      {props.isValid ? (
        <StyledLink href={"/invalid-page"} style={{ color: "#f5f5f5" }}>
          Inaccessible page <LinkSame />
        </StyledLink>
      ) : (
        <StyledLink href={"/valid-page"} style={{ color: "#f5f5f5" }}>
          Accessible page <LinkSame />
        </StyledLink>
      )}
    </StyledNav>
  );
};
