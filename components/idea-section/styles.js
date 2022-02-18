import styled from "styled-components";

const StyledIdeaSection = styled.section`
  padding: 0 25px;
  margin: 30px 0;
  line-height: 1.4;
  margin-bottom: 50px;
`;
const StyledIdeaHeading = styled.h2`
  margin-bottom: 30px;
  font-size: 30px;
  font-family: ${(props) => props.theme.fonts.mainBold};
`;
const StyledIdeaText = styled.p`
  font-size: 22px;
`;

export { StyledIdeaSection, StyledIdeaHeading, StyledIdeaText };
