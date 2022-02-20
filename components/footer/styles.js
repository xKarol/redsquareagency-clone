import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1;
`;

const StyledEmail = styled.a`
  font-size: 35px;
  font-family: ${(props) => props.theme.fonts.mainBold};
  margin-right: 20px;
  position: relative;
  z-index: 100;
  @media ${device.sm} {
    font-size: 60px;
  }
  span.email {
    color: ${(props) => props.theme.colors.red};
  }
`;

const StyledEmailHeading = styled.h4`
  font-family: ${(props) => props.theme.fonts.mainBold};
`;

const StyledSocials = styled.ul`
  display: flex;
  margin-bottom: 25px;
`;

const StyledSocialLink = styled.li`
  font-size: 25px;
  transition: opacity 300ms ease-in-out;
  &:hover {
    opacity: 0.5;
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const StyledPlaces = styled.ul`
  color: ${(props) => props.theme.colors.gray};
  display: flex;
  align-items: center;
  font-size: 18px;
  > li:not(:last-child) {
    margin-right: 35px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  @media (min-width: 823px) {
    align-items: flex-end;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 50px;
  @media ${device.sm} {
    margin-bottom: 150px;
  }
`;

export {
  StyledFooter,
  StyledEmail,
  StyledEmailHeading,
  StyledSocials,
  StyledSocialLink,
  StyledPlaces,
  Box,
  Container,
};
