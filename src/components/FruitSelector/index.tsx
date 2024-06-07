import { AppleSVG, CarrotSVG, LemonSVG } from "@/assets/svg";
import React, { useState } from "react";
import styled, { css } from "styled-components";

export interface FruitSelectorProps {
  isInaccessible?: boolean;
}

const FruitSelector = (props: FruitSelectorProps) => {
  const [selectedFruit, setSelectedFruit] = useState<string | null>(null);
  const fruits = [
    {
      name: "apple",
      imgSrc: <AppleSVG isInaccessible={props.isInaccessible} />,
      alt: "Apple",
    },
    {
      name: "lemon",
      imgSrc: <LemonSVG isInaccessible={props.isInaccessible} />,
      alt: "lemon",
    },
    {
      name: "carrot",
      imgSrc: <CarrotSVG isInaccessible={props.isInaccessible} />,
      alt: "carrot",
    },
  ];

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    fruitName: string
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      setSelectedFruit(fruitName);
    }
  };

  return (
    <>
      <span id="fruit-selector-label">Select your favorite fruit</span>
      <FruitSelectorContainer
        role="radiogroup"
        aria-labelledby="fruit-selector-label"
      >
        {fruits.map((fruit) => (
          <FruitOption
            key={fruit.name}
            selected={selectedFruit === fruit.name}
            role="radio"
            aria-checked={selectedFruit === fruit.name}
            tabIndex={0}
            onClick={() => setSelectedFruit(fruit.name)}
            onKeyDown={(event) => handleKeyDown(event, fruit.name)}
          >
            {fruit.imgSrc}
          </FruitOption>
        ))}
      </FruitSelectorContainer>
    </>
  );
};

export default FruitSelector;

const FruitSelectorContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
`;

interface FruitOptionProps {
  selected: boolean;
}

const FruitOption = styled.div<FruitOptionProps>`
  cursor: pointer;
  transition: transform 0.2s;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ selected }) =>
    selected &&
    css`
      border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
      transform: scale(1.1);
    `}

  &:hover, &:focus {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }

  svg {
    display: flex;
    width: 40px;
    height: 40px;
  }
`;
