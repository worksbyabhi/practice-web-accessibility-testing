import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      // The main color used to represent the brand. It is often used for primary actions, links, and highlights.
      // Example Use: Buttons, active links, headers
      primary: string;
      // A complementary color to the primary color. It is used to highlight secondary actions or elements.
      // Example Use: Secondary buttons, less prominent links, badges.

      secondary: string;
      // A third color that provides additional contrast. It is often used for accents and less frequent elements.
      // Example Use: Accent borders, hover states, notifications.
      tertiary: string;
      // The color used for the background of the website. It can be light or dark, depending on the design.
      // Example Use: Page background, card backgrounds.
      background: string;
      textPrimary: string;
      textSecondary: string;
      error: string;
      warning: string;
      success: string;
      info: string;
    };
    grid: {
      small: {
        margin: number;
        gutter: number;
        columns: number;
      };
      medium: {
        margin: number;
        gutter: number;
        columns: number;
      };
      large: {
        margin: number;
        gutter: number;
        columns: number;
        width?: number;
      };
    };
    breakpoints: {
      medium: number;
      large: number;
    };
  }
}
