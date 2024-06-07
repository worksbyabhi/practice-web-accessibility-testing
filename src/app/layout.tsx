import type { Metadata } from "next";
import "./globals.scss";
import ThemeWrapper from "@/designSystem/theme/ThemeWrapper";
import StyledComponentsRegistry from "@/designSystem/theme/StyledComponentRegistry";

export const metadata: Metadata = {
  title: "Practice Web Accessibility Testing",
  description: "Learn and practice web accessibility testing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeWrapper>{children}</ThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
