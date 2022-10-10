import styled from "styled-components";

type Props = {
  height?: string;
  color?: string;
};

export const Divider = styled.div<Props>`
  height: ${({ height }) => height || "1px"};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
`;
