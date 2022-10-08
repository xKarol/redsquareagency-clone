import styled from "styled-components";

import { breakpoint } from "../../styles";

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1;
`;

export const StyledEmail = styled.a`
  font-size: 35px;
  font-family: ${(props) => props.theme.fonts.mainBold};
  margin-right: 20px;
  position: relative;
  @media ${breakpoint.up("sm")} {
    font-size: 60px;
  }
  span.email {
    color: ${(props) => props.theme.colors.red};
  }
`;

export const StyledEmailHeading = styled.h4`
  font-family: ${(props) => props.theme.fonts.mainBold};
`;

export const StyledSocials = styled.ul`
  display: flex;
  margin-bottom: 25px;
`;

export const StyledSocialLink = styled.li`
  font-size: 25px;
  transition: opacity 300ms ease-in-out;
  &:hover {
    opacity: 0.5;
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const StyledPlaces = styled.ul`
  color: ${(props) => props.theme.colors.gray};
  display: flex;
  align-items: center;
  font-size: 18px;
  > li:not(:last-child) {
    margin-right: 35px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  @media ${breakpoint.up("810px")} {
    align-items: flex-end;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 50px;
  @media ${breakpoint.up("sm")} {
    margin-bottom: 150px;
  }
`;

export const StyledAllProjectsContainer = styled.section`
  display: flex;
  width: 100%;
  height: 125px;
  @media ${breakpoint.up("md")} {
    height: 75px;
  }
`;

export const StyledAllProjectsBlur = styled.div`
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  transition: backdrop-filter 300ms ease-in-out;
`;

export const StyledAllProjectsBox = styled.a`
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
  @media ${breakpoint.up("md")} {
    width: calc(100% - 100px);
    height: calc(100% - 15px);
  }
  @media ${breakpoint.up("lg")} {
    width: calc(100% - 200px);
  }
  &:hover {
    @media ${breakpoint.up("md")} {
      height: 100%;
    }
    ${StyledAllProjectsBlur} {
      backdrop-filter: blur(0);
    }
  }
`;

export const StyledAllProjectsText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 15px 100px;
  font-size: 20px;
  pointer-events: none;
  @media ${breakpoint.up("md")} {
    height: unset;
    justify-content: space-between;
  }
  > span {
    display: none;
    @media ${breakpoint.up("md")} {
      display: block;
    }
  }
  > * {
    font-size: 22px;
  }
`;
