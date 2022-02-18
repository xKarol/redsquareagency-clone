import styled from "styled-components";

const StyledClientsSection = styled.section`
  margin-bottom: 60px;
`;

const StyledClientsHeading = styled.h3`
  font-size: 18px;
  color: ${(props) => props.theme.colors.gray};
  font-weight: 300;
  margin-bottom: 10px;
`;

const StyledClientsList = styled.ol`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  > li {
    font-size: 22px;
  }
`;

export { StyledClientsSection, StyledClientsList, StyledClientsHeading };
