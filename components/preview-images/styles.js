import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledImages = styled.a`
  display: flex;
  width: 100%;
  height: calc(100vw / 2);
  margin: 0 auto;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 5vw;
  margin-bottom: 5vw;
  @media ${device.lg} {
    width: calc(100% - 100px);
    height: calc(100% / 66%);
  }
  @media ${device.xlg} {
    width: calc(100% - 250px);
    height: calc(100% / 66%);
  }
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: none;

  &.active {
    display: block;
  }
  &.list {
    height: calc(100vw / 2);
    margin-top: 8vw;
  }
`;

const ImagesList = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 100px;
  width: calc(100% - 50px);
  @media ${device.md} {
    width: calc(100% - 100px);
  }
  @media ${device.lg} {
    width: calc(100% - 200px);
  }
`;

export { StyledImages, StyledImage, ImagesList };
