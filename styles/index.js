import styled from "styled-components";

const Square = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.red};
`;

export { Square };
