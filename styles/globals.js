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
        padding: 0 25px;
        @media ${device.sm}{
            padding: 0 50px;
        }
        @media ${device.md}{
            padding: 0 100px;
        }
        @media ${device.lg}{
            padding: 0 150px;
        }
    }
`;

export default GlobalStyles;
