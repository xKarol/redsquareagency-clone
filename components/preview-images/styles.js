import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledImages = styled.section`
  width: 100%;
  height: calc(100vw / 2);
  margin: 0 auto;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 5vw;
  margin-bottom: 5vw;
  @media ${device.lg} {
    width: calc(100% - 100px);
    height: calc(100% / 66%);
    &:hover {
      transform: scale(0.98);
    }
  }
  @media ${device.xlg} {
    width: calc(100% - 250px);
    height: calc(100% / 66%);
  }
`;

const StyledImage = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  display: none;
  &.active {
    display: block;
  }
`;

export { StyledImages, StyledImage };
