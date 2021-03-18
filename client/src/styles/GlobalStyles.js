import { createGlobalStyle } from "styled-components";
import PoppinsRegular from "./poppins.ttf";

const GlobalStyle = createGlobalStyle`
   *{
     margin:0;
     padding:0;
     box-sizing:border-box;
   }

   @font-face {
    font-family: "poppins-regular";
    src: url(${PoppinsRegular});
  }


  body{
    max-width:100vw;
    overflow-x:hidden;
    font-family: "poppins-regular";
   }
`;

export default GlobalStyle;
