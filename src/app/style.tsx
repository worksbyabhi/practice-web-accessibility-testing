"use client";

import { GridColumn } from "@/designSystem/grid";
import styled, { css } from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ToolsIUse = styled(GridColumn)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${(props) => props.theme.colors.secondary};

    i {
      display: inline-flex;
      gap: 8px;
      align-items: center;
    }

    &:hover svg {
      transform: rotate(-40deg);
    }

    svg {
      fill: ${(props) => props.theme.colors.secondary};
      height: 16px;
      width: 16px;
      transition: all 0.5s;
    }
  }

  ${({ theme }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.medium}px`}) {
      flex-direction: row;
      gap: 4rem;
    }
  `}
`;
