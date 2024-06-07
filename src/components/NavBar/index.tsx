import React from "react";
import { StyledLink, StyledNav } from "./style";
import Link from "next/link";
import { HomeSVG } from "./HomeSVG";
import { LinkSame } from "@/assets/svg";
import SkipToContent from "../SkipToContent";

export interface NavBarProps {
  as?: string;
  isValid?: boolean;
}

export const NavBar = (props: NavBarProps) => {
  return (
    <StyledNav as={props.as ?? ""}>
      <SkipToContent />
      <Link href={"/"} aria-label={props.isValid ? "Go to home" : ""}>
        <HomeSVG />
      </Link>
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
