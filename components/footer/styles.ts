import styled from "styled-components";

import { breakpoint, pxToRem } from "../../styles";

export namespace Styles {
  export const Footer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    line-height: 1;
  `;

  export const Email = styled.a`
    font-size: ${pxToRem(35)};
    font-family: ${({ theme }) => theme.fonts.mainBold};
    margin-right: 20px;
    position: relative;
    @media ${breakpoint.up("sm")} {
      font-size: ${pxToRem(60)};
    }
    span.email {
      color: ${({ theme }) => theme.colors.red};
    }
  `;

  export const EmailHeading = styled.h4`
    font-family: ${({ theme }) => theme.fonts.mainBold};
  `;

  export const SocialsList = styled.ul`
    display: flex;
    margin-bottom: 25px;
  `;

  export const SocialItem = styled.li`
    font-size: ${pxToRem(25)};
    transition: opacity 300ms ease-in-out;
    &:hover {
      opacity: 0.5;
    }
    &:not(:last-child) {
      margin-right: 30px;
    }
  `;

  export const PlacesList = styled.ul`
    color: ${({ theme }) => theme.colors.gray};
    display: flex;
    align-items: center;
    font-size: ${pxToRem(18)};
  `;

  export const PlaceItem = styled.li`
    margin-right: 35px;
    &:last-of-type {
      margin-right: 0;
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

  export const AllProjectsContainer = styled.section`
    display: flex;
    width: 100%;
    height: 125px;
    @media ${breakpoint.up("md")} {
      height: 75px;
    }
  `;

  export const AllProjectsBlur = styled.div`
    backdrop-filter: blur(10px);
    width: 100%;
    height: 100%;
    transition: backdrop-filter 300ms ease-in-out;
  `;

  export const AllProjectsBox = styled.a`
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
      ${AllProjectsBlur} {
        backdrop-filter: blur(0);
      }
    }
  `;

  export const AllProjectsText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 15px 100px;
    font-size: ${pxToRem(20)};
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
      font-size: ${pxToRem(22)};
    }
  `;
}
