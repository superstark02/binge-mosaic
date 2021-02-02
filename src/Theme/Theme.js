import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      dark: 'rgb(33,33,33)',
      main: '#3f50b5',
      light: '#f9f9f9',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f9f9f9',
      main: '#f44336',
      dark: 'rgb(33,33,33)',
      contrastText: '#000',
    },
  },
});