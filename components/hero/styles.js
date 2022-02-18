import styled from "styled-components";

const StyledHero = styled.section`
  padding: 25px;
  padding-top: 0;
  height: 500px;
  display: flex;
  align-items: flex-end;
`;

const StyledHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.second};
  font-size: 36px;
`;

export { StyledHero, StyledHeading };
