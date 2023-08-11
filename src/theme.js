import { createTheme } from "@mui/material";
import { ptBR } from '@mui/material/locale';

export const theme = createTheme({
    typography: {
        fontFamily: "Golos Text",
        button: { textTransform: "none", fontWeight: 600 },
    },
    palette: {
        primary: {
            main: "#355df0",
            contrastText: "#FFFFFF",
        },
        secondary:{
            main: "#FCAB10",
            contrastText: "#FFFFFF"
        },
        error: {
            main: "#DC494F",
            light: "#D79C831A",
            contrastText: "#DC494F"
        },
        success: {
            main: "#9DD200",
            light: '#9DD20033',
            contrastText: "#9DD200"
        },
        warning: {
            main: "#F2994A",
            contrastText: "#ffffff"
        },
        table: {
            main: "#F5F5F5",
            contrastText: "#ffffff"
        },
        boxTable: {
            main: "#8DB41D33",
            text: "#F86D70",
            icon: "#D9D9D9"
        },
        grey: {
            "100": "#707070",
            "200": "#F5F5F5",
            "500": "#707070",
            "900": "#555"
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,

    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
}, ptBR);