import styled from "styled-components";

import { breakpoint } from "../../styles";

export const StyledClientsSection = styled.section`
  margin-bottom: 60px;
  line-height: 1.5;
`;

export const StyledClientsHeading = styled.h3`
  font-size: 18px;
  color: ${(props) => props.theme.colors.gray};
  font-weight: 300;
  margin-bottom: 10px;
  @media ${breakpoint.up("sm")} {
    margin-right: auto;
  }
`;

export const Box = styled.ul`
  display: flex;
  flex-direction: column;
  > li {
    font-size: 22px;
  }
  @media ${breakpoint.up("sm")} {
    :not(:last-child) {
      margin-right: 25px;
    }
  }
  @media ${breakpoint.up("md")} {
    line-height: 2;
    :not(:last-child) {
      margin-right: 9vw;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  @media ${breakpoint.up("sm")} {
    margin: 100px 0;
  }
  @media ${breakpoint.up("lg")} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledClientsList = styled.div`
  display: flex;
  flex-direction: column;
  @media ${breakpoint.up("sm")} {
    flex-direction: row;
  }
`;
