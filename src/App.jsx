// components Material-UI
import {Button, TextField } from '@mui/material';

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
    <ThemeProvider theme={theme}>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>Disabled</Button>
      <Button variant="contained" href="#contained-buttons">Link</Button>
      <TextField id="outlined-basic" label="Darlley" variant="outlined" fullWidth />
    </ThemeProvider>
  )
}
export default App;