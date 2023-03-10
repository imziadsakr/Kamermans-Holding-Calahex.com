import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import * as locale from '@mui/material/locale';

import { DefaultLocale } from '../static/constants';

// colors
const primary = "#f0aa15";
const secondary = "#C72127";

const buyPrice = "#0fb876";
const black = "#303030";
const lightBlack = "#2a2d35" ;
const highlight = "#474d57";
const disabledBlack = "#848e9c";
const darkBlack = "#0c1319";
const background = "#161a1e";

const warningLight = "rgba(255, 246, 32, .3)";
const warningMain = "rgba(255, 246, 32, .5)";
const warningDark = "rgba(255, 246, 32, .7)";
const label = '#b7bdc6';
const lightLabel = '#eae9e2' ;

// border
const borderWidth = 1;
const borderColor = "#2e6da4";

// breakpoints
// const xl = 1920;
// const lg = 1280;
// const md = 960;
// const sm = 600;
// const xs = 0;

// spacing
const spacing = 8;

const theme = createTheme({
    layout: {
        headerHeight : 60 ,
        contentWidth: 1140,
        footerWidth: 1400
    },
    palette: {
        primary: { main: primary, footer: '#055da6' },
        secondary: { main: secondary },
        common: {
            black : black,
            darkBlack : darkBlack,
            lightBlack : lightBlack,
            disabledBlack : disabledBlack,
            label : label,
            lightLabel : lightLabel,
            buyPrice : buyPrice
        },
        warning: {
            light: warningLight,
            main: warningMain,
            dark: warningDark
        },
        tonalOffset: 0.2,
        background: {
            default: background,
            gray: '#f1f1f170'
        },
        spacing
    },
    // breakpoints: {
    //     values: {
    //         xl,
    //         lg,
    //         md,
    //         sm,
    //         xs
    //     }
    // },
    border: {
        borderColor: borderColor,
        borderWidth: borderWidth
    },
    overrides: {

    },
    typography: {
        useNextVariants: true
    }
}, locale[DefaultLocale]);

export default responsiveFontSizes(theme);
