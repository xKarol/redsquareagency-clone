import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";

const StyledHero = styled.section`
  height: 50vh;
  display: flex;
  align-items: flex-end;
`;

const StyledHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.second};
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

export { StyledHero, StyledHeading };
