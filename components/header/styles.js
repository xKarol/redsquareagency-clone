import styled from "styled-components";

const StyledHeader = styled.header`
  top: 30px;
  left: 0;
  right: 0;
  padding: 30px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
