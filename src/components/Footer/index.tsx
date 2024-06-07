import React from "react";

import { DividerLine, StyledFooter } from "./style";
import { GridColumn, GridContainer } from "@/designSystem/grid";
import { Placeholder } from "@/designSystem/Placeholder";
import { LinkNew, LinkSame } from "@/assets/svg";

export interface FooterProps {
  as?: string;
}

export const Footer = (props: FooterProps) => {
  return (
    <StyledFooter id="footer" as={props.as ?? ""}>
      <Placeholder height="2rem" />
      <GridContainer>
        <GridColumn>
          <a
            href="https://worksbyabhi.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open portfolio of Abhishek Kumar in a new tab"
          >
            <i>
              Abhishek Kumar <LinkSame />
            </i>
          </a>
          <DividerLine />
        </GridColumn>
      </GridContainer>
    </StyledFooter>
  );
};
