import styled from "styled-components";

import { breakpoint } from "../../styles";

export const StyledImages = styled.a`
  display: flex;
  width: 100%;
  height: calc(100vw / 2);
  margin: 0 auto;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 5vw;
  margin-bottom: 5vw;
  @media ${breakpoint.up("lg")} {
    width: calc(100% - 100px);
    height: calc(100% / 66%);
  }
  @media ${breakpoint.up("xl")} {
    width: calc(100% - 250px);
    height: calc(100% / 66%);
  }
`;

export const StyledImage = styled.div`
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

export const ImagesList = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 100px;
  width: calc(100% - 50px);
  @media ${breakpoint.up("md")} {
    width: calc(100% - 100px);
  }
  @media ${breakpoint.up("lg")} {
    width: calc(100% - 200px);
  }
`;
