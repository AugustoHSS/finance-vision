import { createGlobalStyle } from 'styled-components';
import backgroundImage from './oi.jpg';

export default createGlobalStyle`
body {
    min-width: 100vw;
    min-height: 100vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    
}
button {
    cursor: pointer;
}
* {
    margin: 0;
    padding: 0;
    outline: 0;
    font: inherit;
    box-sizing: border-box;
    font-family: "poppins";
}

  `;