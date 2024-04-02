import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: "Overpass", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    * {
        box-sizing: border-box;
    }
`;
