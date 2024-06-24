"use client";
import { MyLogoWhite } from "@/assets/svg";

import Link from "next/link";
import { StyledPrimaryNav } from "./style";
import SkipToContent from "../SkipToContent";

export const PrimaryNavBar = () => {
  return (
    <StyledPrimaryNav aria-label="Primary">
      <SkipToContent />
      <Link
        className="logo-home-button"
        href="https://worksbyabhi.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My portfolio"
      >
        <MyLogoWhite />
      </Link>
    </StyledPrimaryNav>
  );
};
