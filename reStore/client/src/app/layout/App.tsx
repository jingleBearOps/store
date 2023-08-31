import {CssBaseline} from "@mui/material";
import Catalog from '../../features/catalog/catalog';
import Header from "./Header";
import { Container } from "@mui/system";
import {ThemeProvider, createTheme} from '@mui/material/styles'
import { useState } from 'react';
import { Outlet } from "react-router";
const products = [
  {name:'product1', price: 100.00},
  {name:'product2', price: 200.00},
  {name:'product3', price: 300.00},
]
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark': "light"
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background:{
        default: paletteType === 'light' ?'#eaeaea': '#121212'
      }
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
