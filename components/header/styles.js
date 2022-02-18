import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledHeader = styled.header`
  margin-top: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.lg} {
    margin-top: 100px;
  }
`;

const StyledLink = styled.a`
  font-size: 18px;
  display: flex;
  align-items: center;
  > :last-child {
    color: ${(props) => props.theme.colors.gray};
    margin-left: 5px;
  }
`;

export { StyledHeader, StyledLink };
