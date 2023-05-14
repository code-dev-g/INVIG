import { createTheme } from '@mui/material/styles';
import colors from './colors';
// Create a theme instance.
const theme = createTheme( {
    typography: {
        fontFamily: [
            'Fira Sans',
            'Shanti',
            'Work Sans',
            'Roboto',
            '"Helvetica Neue"',
            'sans-serif',
        ].join( ',' ),
        primary: {
            fontFamily: 'Fira Sans',
            fontWeight: 400,
        },
        secondary: {
            fontFamily: 'Shanti',
            fontWeight: 400,
        },
        tertiary: {
            fontFamily: 'Work Sans',
            fontWeight: 400,
        },
    },
    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
        },
        accent: {
            main: colors.accent,
        },
        background: {
            default: colors.background,
        },
        text: {
            primary: colors.text,
            secondary: '#757575',
        },
    },
} );
export default theme;