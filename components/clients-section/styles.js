import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledClientsSection = styled.section`
  margin-bottom: 60px;
  line-height: 1.5;
`;

const StyledClientsHeading = styled.h3`
  font-size: 18px;
  color: ${(props) => props.theme.colors.gray};
  font-weight: 300;
  margin-bottom: 10px;
  @media ${device.sm} {
    margin-right: auto;
  }
`;

const Box = styled.ul`
  display: flex;
  flex-direction: column;
  > li {
    font-size: 22px;
  }
  @media ${device.sm} {
    :not(:last-child) {
      margin-right: 25px;
    }
  }
  @media ${device.md} {
    line-height: 2;
    :not(:last-child) {
      margin-right: 9vw;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  @media ${device.sm} {
    margin: 100px 0;
  }
  @media ${device.lg} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledClientsList = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.sm} {
    flex-direction: row;
  }
`;

export {
  StyledClientsSection,
  StyledClientsHeading,
  Box,
  Container,
  StyledClientsList,
};
