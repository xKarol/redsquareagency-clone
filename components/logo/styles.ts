import styled, { css } from "styled-components";

import type { Shapes } from "./types";

type ShapeProps = {
  variant: Shapes;
};

export namespace Styles {
  export const LogoShape = styled.a<ShapeProps>`
    width: 30px;
    height: 30px;

    ${({ variant }) =>
      variant === "square" &&
      css`
        background-color: ${({ theme }) => theme.colors.red};
      `};

    ${({ variant }) =>
      variant === "circle" &&
      css`
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.blue};
      `};

    ${({ variant }) =>
      variant === "triangle" &&
      css`
        align-items: center;
        border-radius: 50%;
        display: flex;
        justify-content: center;

        &:after {
          --a: 30px;
          --border-left: calc(0.866 * var(--a));
          border-bottom: calc(var(--a) / 2) solid transparent;
          border-left: var(--border-left) solid ${({ theme }) => theme.colors.yellow};
          border-right: 0;
          border-top: calc(var(--a) / 2) solid transparent;
          content: "";
          height: 0;
          transform: translateX(4px) translateY(3px) rotate(30deg);
          width: 0;
        }
      `};
  `;
}
