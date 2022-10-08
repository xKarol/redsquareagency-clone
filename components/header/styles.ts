import styled from "styled-components";

import { breakpoint } from "../../styles";

export const StyledHeader = styled.header`
  margin-top: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 50;
  font-size: 20px;
  @media ${breakpoint.up("lg")} {
    margin-top: 100px;
  }
`;

export const StyledLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1em;
  > * {
    transition: transform 200ms ease-in-out;
  }
  &:hover {
    > :first-child {
      transform: translateX(5px);
    }
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
