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
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  z-index: 100;
  &:hover {
    /* transform: translateX(5px); // sprawdzic czemu nie ma tla gdy jest ta wartosc */
    > :last-child {
      transform: translateX(5px);
    }
  }
  > :last-child {
    color: ${(props) => props.theme.colors.white};
    font-size: 22px;
    margin-left: 5px;
    transition: transform 400ms ease-in-out;
  }
`;

export { StyledHeader, StyledLink };
