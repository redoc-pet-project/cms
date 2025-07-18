// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#66b5ed',
        },
        secondary: {
            main: '#ff7e4a',
        },
        text: {
            primary: '#000000',
            secondary: '#555555',
        },
        background: {
            default: '#fdf5f2',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        fontWeightMedium: 600,
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: '#66b5ed',
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#000000',
                    color: '#ffffff',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 6,
                },
            },
        },
        MuiTypography: {
            defaultProps: {
                color: '#66b5ed',

            },
        },

    },
});

export default theme;
