"use client";

import { LinkButton } from "@/designSystem/Button";
import { Placeholder } from "@/designSystem/Placeholder";
import { GridColumn, GridContainer } from "@/designSystem/grid";
import Link from "next/link";
import { LinkContainer, MainContainer, ToolsIUse } from "./style";
import { Footer } from "@/components/Footer";
import { LinkSame } from "@/assets/svg";

export default function Home() {
  return (
    <MainContainer as="div">
      <MainContainer>
        <GridContainer>
          <GridContainer child>
            <GridColumn style={{ alignItems: "center" }}>
              <Placeholder height="4rem" />
              <h1>Practice Web Accessibility Testing</h1>
              <Placeholder height="2rem" />
              <p>
                Grab your favourite accessibility tool and lets get started!
              </p>
            </GridColumn>
          </GridContainer>
          <GridContainer child>
            <GridColumn style={{ alignItems: "center" }}>
              <LinkContainer>
                <LinkButton href="/valid-page" as={Link}>
                  Accessible page <LinkSame />
                </LinkButton>
                <LinkButton href="/invalid-page" as={Link}>
                  Inaccessible page <LinkSame />
                </LinkButton>
              </LinkContainer>
            </GridColumn>
          </GridContainer>
          <Placeholder height="6rem" />
          <GridContainer child>
            <GridColumn style={{ alignItems: "center" }}>
              <h2>Tools I use</h2>
            </GridColumn>
            <ToolsIUse>
              <a
                href="https://support.apple.com/en-gb/guide/voiceover/welcome/mac"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Voiceover guide in a new tab"
              >
                Voiceover (Mac) <LinkSame />
              </a>
              <a
                href="https://www.nvaccess.org/download/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open NVDA website in a new tab"
              >
                NVDA (windows) <LinkSame />
              </a>
              <a
                href="https://chromewebstore.google.com/detail/siteimprove-accessibility/djcglbmbegflehmbfleechkjhmedcopn?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Siteimprove Accessibility Checker chrome extension in a new tab"
              >
                Siteimprove <LinkSame />
              </a>
              <a
                href="https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open wave evaluation tool chrome extension in a new tab"
              >
                WAVE <LinkSame />
              </a>
            </ToolsIUse>
          </GridContainer>
        </GridContainer>
      </MainContainer>
      <Footer />
    </MainContainer>
  );
}
