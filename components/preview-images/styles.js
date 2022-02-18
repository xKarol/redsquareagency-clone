import styled from "styled-components";

const StyledImages = styled.section`
  width: 100%;
  height: 225px;
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
