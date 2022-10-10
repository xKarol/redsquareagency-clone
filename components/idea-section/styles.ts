import styled from "styled-components";

import { breakpoint, pxToRem } from "../../styles";

export namespace Styles {
  export const Container = styled.section`
    margin: 30px auto;
    line-height: 1.2;
    margin-bottom: 50px;
    max-width: 2200px;
  `;

  export const Heading = styled.h2`
    margin-bottom: 30px;
    font-size: ${pxToRem(32)};
    font-family: ${(props) => props.theme.fonts.mainBold};
    letter-spacing: -2px;
    @media ${breakpoint.up("md")} {
      font-size: ${pxToRem(45)};
    }
    @media ${breakpoint.up("lg")} {
      margin-bottom: 60px;
      font-size: 4.5vw;
    }
    @media ${breakpoint.up("xl")} {
      font-size: ${pxToRem(65)};
    }
  `;

  export const Text = styled.p`
    font-size: ${pxToRem(22)};
    line-height: 1.6;
    @media ${breakpoint.up("md")} {
      font-size: ${pxToRem(24)};
    }
    @media ${breakpoint.up("lg")} {
      font-size: 2.5vw;
    }
    @media ${breakpoint.up("xl")} {
      line-height: 1.4;
      font-size: ${pxToRem(45)};
    }
  `;
}
