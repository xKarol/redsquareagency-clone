import styled from "styled-components";
import { device } from "../../styles/breakpoints";

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
  @media ${device.md} {
    font-size: 7vw;
    line-height: 1;
  }
  @media ${device.xlg} {
    font-size: 100px;
  }
  > :not(:last-child) {
    /* margin-right: 15px; */
  }
`;

export { StyledHero, StyledHeading };
