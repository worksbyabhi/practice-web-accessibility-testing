"use client";

import { LinkButton } from "@/designSystem/Button";
import { Placeholder } from "@/designSystem/Placeholder";
import { GridColumn, GridContainer } from "@/designSystem/grid";
import Link from "next/link";
import { LinkContainer, MainContainer, ToolsIUse } from "./style";
import { Footer } from "@/components/Footer";
import { LinkSame } from "@/assets/svg";
import ScreenReaderText from "@/designSystem/ScreenReaderText";
import { useEffect, useRef } from "react";

export default function Home() {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    console.log(h1Ref.current);
    h1Ref.current?.focus();
  }, []);

  return (
    <MainContainer as="div">
      <Placeholder height="2rem" />
      <MainContainer>
        <GridContainer>
          <GridContainer child>
            <GridColumn style={{ alignItems: "center" }}>
              <Placeholder height="4rem" />
              <h1 ref={h1Ref} tabIndex={-1}>
                Practice Web Accessibility Testing
              </h1>
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
              >
                <ScreenReaderText>Open</ScreenReaderText>Voiceover (Mac){" "}
                <LinkSame />
                <ScreenReaderText>guide in a new tab</ScreenReaderText>
              </a>
              <a
                href="https://www.nvaccess.org/download/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ScreenReaderText>Open</ScreenReaderText>NVDA (windows){" "}
                <LinkSame />
                <ScreenReaderText>in a new tab</ScreenReaderText>
              </a>
              <a
                href="https://www.siteimprove.com/integrations/browser-extensions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Siteimprove Accessibility Checker chrome extension in a new tab"
              >
                <ScreenReaderText>Open</ScreenReaderText>Siteimprove{" "}
                <LinkSame />
                <ScreenReaderText>
                  browser extension in a new tab
                </ScreenReaderText>
              </a>
              <a
                href="https://wave.webaim.org/extension/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open wave evaluation tool chrome extension in a new tab"
              >
                <ScreenReaderText>Open</ScreenReaderText>WAVE <LinkSame />
                <ScreenReaderText>
                  browser extension in a new tab
                </ScreenReaderText>
              </a>
            </ToolsIUse>
          </GridContainer>
        </GridContainer>
      </MainContainer>
      <Footer />
    </MainContainer>
  );
}
