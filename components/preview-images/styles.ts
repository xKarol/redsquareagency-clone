import styled from "styled-components";

import { breakpoint } from "../../styles";

export namespace Styles {
  export const CarouselContainer = styled.section`
    display: flex;
    width: 100%;
    height: calc(100vw / 2);
    margin: 0 auto;
    overflow: hidden;
    margin-top: 5vw;
    margin-bottom: 5vw;

    @media ${breakpoint.up("lg")} {
      width: calc(100% - 100px);
    }
    @media ${breakpoint.up("xl")} {
      width: calc(100% - 250px);
    }
  `;

  export const Image = styled.figure`
    width: 100%;
    height: calc(100vw / 2);
    position: relative;
    display: block;
    background-color: ${({ theme }) => theme.colors.placeholderColor};
    border-radius: 3px;
    overflow: hidden;
    &.hidden {
      display: none;
    }
  `;

  export const ImagesList = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 100px;
    width: calc(100% - 50px);
    ${Image} {
      margin-top: 8vw;
    }
    @media ${breakpoint.up("md")} {
      width: calc(100% - 100px);
    }
    @media ${breakpoint.up("lg")} {
      width: calc(100% - 200px);
    }
  `;
}
