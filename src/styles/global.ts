import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 2em Roboto, sans-serif;
    }

    html, body, #root {
        height: 100%;
        background: rgb(2,0,36);
        background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(107,3,3,1) 50%, rgba(15,15,15,1) 100%);
    }

    button {
        cursor: pointer;
    }
`;

export default globalStyle;