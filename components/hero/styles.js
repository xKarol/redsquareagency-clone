import styled, { keyframes } from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledHero = styled.section`
  height: 500px;
  display: flex;
  align-items: flex-end;
  font-size: 36px;

  @media ${device.md} {
    height: 270px;
    font-size: 7vw;
  }
  @media ${device.xlg} {
    height: 1500px;
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.second};
  font-size: 1em;
  line-height: 1;
  margin-bottom: 25px;
  @media ${device.xlg} {
    font-size: 100px;
  }
  > span {
    animation: ${slideDown} 400ms attr(data-delay) ease-in-out;
  }
  > :not(:last-child) {
    margin-right: 15px;
  }
`;

export { StyledHero, StyledHeading };
