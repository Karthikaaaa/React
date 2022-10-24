import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    red: createColor('#FF0000'),
  },
});

const Theme = (props) => <ThemeProvider theme={theme} {...props} />;
export default Theme;
