import { createTheme } from "@mui/material";

const font = "'Poppins', sans-serif";
const theme = createTheme({
    palette: {
        primary: {
            main: "#272729",
            light: "#3a3a3d"
        },
        secondary: {
            main: "#4bafe8",
            light: "#fce46a",
        },
        text: {
            main: "#383837",
            light: "#9c9a9a"
        },
        whiteShade: {
            main: "#9eaaba",
            light: "#fafafa"
        },
        blueShade: {
            main: "#0057a3",
            mid: "#0074cc",
            light: "#0095f6",
            superlight: "#47afff"
        },
        otherColor: {
            main: "#999"
        }
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "#232f3e",
            },
        },
    },
    typography: {
        fontFamily: font,
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        h3: { fontWeight: 500 },
        h4: { fontWeight: 400 },
        h5: { fontWeight: 300 },
        h6: { fontWeight: 300 }
    },

});
export default theme;