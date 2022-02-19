import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledHero = styled.section`
  height: 500px;
  display: flex;
  align-items: flex-end;
  font-size: 36px;

  @media ${device.lg} {
    height: 270px;
    font-size: 7vw;
  }
`;

const StyledHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.second};
  font-size: 1em;
  line-height: 1;
  margin-bottom: 25px;
`;

export { StyledHero, StyledHeading };
