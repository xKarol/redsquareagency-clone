import styled from "styled-components";

export const StyledDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  opacity: 0.25;
`;
