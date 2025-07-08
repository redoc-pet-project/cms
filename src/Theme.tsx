// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#f05a22',
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
                    background: '#f05a22',
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
                color: '#f05a22',

            },
        },

    },
});

export default theme;
