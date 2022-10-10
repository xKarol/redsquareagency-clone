import styled from "styled-components";

import { breakpoint, pxToRem } from "../../styles";

export namespace Styles {
  export const Header = styled.header`
    margin-top: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 50;
    font-size: ${pxToRem(20)};
    @media ${breakpoint.up("lg")} {
      margin-top: 100px;
    }
  `;

  export const NavigationButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1em;
    > * {
      transition: transform 200ms ease-in-out;
    }
    &:hover {
      > :first-child {
        transform: translateX(5px);
      }
      > :last-child {
        transform: translateX(5px);
      }
    }
    > :last-child {
      color: ${({ theme }) => theme.colors.white};
      font-size: ${pxToRem(22)};
      margin-left: 5px;
      transition: transform 400ms ease-in-out;
    }
  `;
}
