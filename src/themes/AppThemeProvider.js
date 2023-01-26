import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { grey, blue } from '@mui/material/colors';

const AppThemeProvider = (props) => {
  const [mode, setMode] = React.useState('light');

  const lightMode = {
    primary: grey,
    divider: grey[300],
    background: {
      default: '#DAE0E6',
      primary: grey[50],
      paper: grey[100],
      lightPaper: grey[100],
      lightPaper2: grey[200],
      secondary: blue[700],
      customBtn: '#ccc',
      customBtn2: '#ff4500',
    },
    text: {
      primary: grey[900],
      secondary: grey[800],
      sideBorder: grey[300],
      btnText: '#000',
    },
  };

  const darkMode = {
    primary: grey,
    divider: grey[300],
    background: {
      default: grey[900],
      paper: grey[900],
      lightPaper: grey[800],
      lightPaper2: grey[700],
      secondary: blue[700],
      customBtn: '#ccc',
      customBtn2: '#ccc',
    },
    text: {
      primary: grey[50],
      secondary: grey[500],
      sideBorder: grey[800],
      btnText: '#000',
    },
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? lightMode : darkMode),
    },
    typography: {
      allVariants: {
        fontFamily: 'IBM Plex Sans',
        fontSize: '14px',
        fontWeight: 400,
      },
    },
    components: {
      MuiChip: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: blue[400],
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default AppThemeProvider;
