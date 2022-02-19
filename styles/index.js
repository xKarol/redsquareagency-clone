import styled from "styled-components";

const Square = styled.a`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.red};
`;

const StyledDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray};
  opacity: 0.25;
`;

export { Square, StyledDivider };
