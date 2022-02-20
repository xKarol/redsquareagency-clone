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
    .hover-blur{
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
        &:hover{
            &:before {
                @media ${device.sm} {
                    opacity: 1;
                }
            }
        }
    }
`;

export default GlobalStyles;
