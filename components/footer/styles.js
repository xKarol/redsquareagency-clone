import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledFooter = styled.footer`
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
  line-height: 1;
  flex-wrap: wrap;
  @media ${device.sm} {
    padding-bottom: 150px;
  }
`;

const StyledEmail = styled.a`
  font-size: 35px;
  font-family: ${(props) => props.theme.fonts.mainBold};
  margin-right: 50px;
  position: relative;
  z-index: 100;
  @media ${device.sm} {
    font-size: 60px;
  }
  span.email {
    color: ${(props) => props.theme.colors.red};
  }
  &:before {
    content: "";
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    backdrop-filter: blur(5px) brightness(0.4);
    z-index: -1;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    pointer-events: none;
  }
  &:hover:before {
    @media ${device.sm} {
      opacity: 1;
    }
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

export {
  StyledFooter,
  StyledEmail,
  StyledEmailHeading,
  StyledSocials,
  StyledSocialLink,
  StyledPlaces,
  Box,
};
