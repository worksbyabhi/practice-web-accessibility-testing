import React, { ReactNode } from "react";

import { ScreenReaderOnly } from "./style";

export const ScreenReaderText = ({ children }: { children: ReactNode }) => {
  return (
    <ScreenReaderOnly className="screenReaderOnly">{children}</ScreenReaderOnly>
  );
};

export default ScreenReaderText;
