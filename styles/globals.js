import { createGlobalStyle } from "styled-components";
import { device } from "./breakpoints";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-size: 22px;
        font-weight: 300;
        font-family: ${(props) => props.theme.fonts.main};
        background-color: ${(props) => props.theme.colors.black};
        color: ${(props) => props.theme.colors.white};
    }
    ol, ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.white};
    }
    .spacing{
        padding-left: 25px;
        padding-right: 25px;
        @media ${device.sm}{
            padding-left: 50px;
            padding-right: 50px;
        }
        @media ${device.lg}{
            padding-left: 150px;
            padding-right: 150px;
        }
        @media ${device.xlg}{
            padding-left: calc(150px + 5vw);
            padding-right: calc(150px + 5vw);
        }
    }
    .bg-hover-blur{
        > *{
            z-index: 200;
        }
        &:after {
            content: "";
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 100;
            backdrop-filter: blur(5px) brightness(0.4);
            opacity: 0;
            transition: opacity 200ms ease-in-out;
            pointer-events: none;
        }
        &:hover{
            &:after {
                @media ${device.sm} {
                    opacity: 1;
                }
            }
        }
        &.bg-hover-blur__email{
            z-index: 200;
            &:after{
                z-index: -1;
            }
        }
    }
    .scale-transition{
        transition: transform 200ms ease-in-out;
        cursor: pointer;
        @media ${device.lg} {
            &:hover {
                transform: scale(0.98);
            }
        }
    }
    .scale-brightness-transition{
        transition: transform 200ms ease-in-out, filter 300ms ease-in-out;
        cursor: pointer;
        &:hover{
            transform: scale(0.98);
            filter: brightness(0.75);
        }
    }
`;

export default GlobalStyles;
