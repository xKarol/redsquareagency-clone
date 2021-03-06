import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledIdeaSection = styled.section`
  margin: 30px auto;
  line-height: 1.2;
  margin-bottom: 50px;
  max-width: 2200px;
`;
const StyledIdeaHeading = styled.h2`
  margin-bottom: 30px;
  font-size: 32px;
  font-family: ${(props) => props.theme.fonts.mainBold};
  letter-spacing: -2px;
  @media ${device.md} {
    font-size: 45px;
  }
  @media ${device.lg} {
    margin-bottom: 60px;
    font-size: 4.5vw;
  }
  @media ${device.xlg} {
    font-size: 65px;
  }
`;
const StyledIdeaText = styled.p`
  font-size: 22px;
  line-height: 1.6;
  @media ${device.md} {
    font-size: 24px;
  }
  @media ${device.lg} {
    font-size: 2.5vw;
  }
  @media ${device.xlg} {
    line-height: 1.4;
    font-size: 45px;
  }
`;

export { StyledIdeaSection, StyledIdeaHeading, StyledIdeaText };
