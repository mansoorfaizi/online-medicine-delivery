import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    direction: localStorage.getItem('settings.themeDirection'),
});

const customThemeProvider = ({ children }) => {
    <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default customThemeProvider;
