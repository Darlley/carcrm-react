import { Provider } from "react-redux"; // Redux
import { store } from "./store/store";

import Routes from './Routes'; // rotas

// import {Button, TextField } from '@mui/material'; // components Material-UI
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap
// import { MdPayment } from 'react-icons/md' // import React-Icons / Material-UI

// theme provider Material-UI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500]
    },
  },
  props: {
    MuiTextField: { variant: 'outlined', fullWidth: true },
    MuiSelect: { variant: 'outlined', fullWidth: true }
  }
});


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}
export default App;