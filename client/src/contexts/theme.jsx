import { createContext, useContext } from "react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// let theme = createTheme({
//   palette: {
//     primary: {
//       main: "#26a69a",
//     },
//     secondary: {
//       main: "#afafad",
//     },
//   },
// });
let theme = createTheme();

theme = responsiveFontSizes(theme);

export default theme;
