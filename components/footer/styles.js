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

const StyledAllProjectsContainer = styled.section`
  display: flex;
  width: 100%;
  height: 125px;
  @media ${device.md} {
    height: 75px;
  }
`;

const StyledAllProjectsBlur = styled.div`
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  transition: backdrop-filter 300ms ease-in-out;
`;

const StyledAllProjectsBox = styled.a`
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  background-image: url("/images/7ee825e0906b2918e50a9f963c50198b5c26b27d_flip-thumb.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  border-radius: 4px 4px 0 0;
  transition: height 200ms ease-in-out;
  cursor: pointer;
  @media ${device.md} {
    width: calc(100% - 100px);
    height: calc(100% - 15px);
  }
  @media ${device.lg} {
    width: calc(100% - 200px);
  }
  &:hover {
    @media ${device.md} {
      height: 100%;
    }
    ${StyledAllProjectsBlur} {
      backdrop-filter: blur(0);
    }
  }
`;

const StyledAllProjectsText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 15px 100px;
  font-size: 20px;
  pointer-events: none;
  @media ${device.md} {
    height: unset;
    justify-content: space-between;
  }
  > span {
    display: none;
    @media ${device.md} {
      display: block;
    }
  }
  > * {
    font-size: 22px;
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
  StyledAllProjectsContainer,
  StyledAllProjectsBox,
  StyledAllProjectsBlur,
  StyledAllProjectsText,
};
