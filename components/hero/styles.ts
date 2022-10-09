import styled from "styled-components";

import { breakpoint } from "../../styles";

export namespace Styles {
  export const Container = styled.section`
    height: 50vh;
    display: flex;
    align-items: flex-end;
  `;

  export const Heading = styled.h1`
    font-family: ${({ theme }) => theme.fonts.second};
    font-size: 1em;
    line-height: 1.3;
    margin-bottom: 25px;
    font-size: 36px;
    @media ${breakpoint.up("md")} {
      font-size: 7vw;
      line-height: 1;
    }
    @media ${breakpoint.up("xl")} {
      font-size: 100px;
    }
  `;
}
