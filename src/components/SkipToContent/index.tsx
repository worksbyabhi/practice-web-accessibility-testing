"use client";

import React from "react";
import styled from "styled-components";

const SkipButton = styled.button`
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 100;
  text-decoration: none;
  &:focus {
    top: 0;
  }
`;

const SkipToContent = () => {
  const skipClickHandler = () => {
    document.getElementsByTagName("h1")[0]?.focus();
  };
  return <SkipButton onClick={skipClickHandler}>Skip to content</SkipButton>;
};

export default SkipToContent;
