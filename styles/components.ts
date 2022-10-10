import styled from "styled-components";

export const StyledDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray};
  opacity: 0.25;
`;
