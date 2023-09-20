import {CssBaseline} from "@mui/material";
import Header from "./Header";
import { Container } from "@mui/system";
import {ThemeProvider, createTheme} from '@mui/material/styles'
import { useCallback, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router";
import LoadingComponent from "./LoadingComponent";
// import { useStoreContext } from "../context/StoreContext";
import { fetchBasketAsync, setBasket } from "../../features/basket/basketSlice";
import { useAppDispatch } from "../store/configureStore";
import { fetchCurrentUser } from "../../features/account/accountSlice";
import { useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
// const products = [
//   {name:'product1', price: 100.00},
//   {name:'product2', price: 200.00},
//   {name:'product3', price: 300.00},
// ]

function App() {
  const location = useLocation();
  const dispatch  = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const initApp = useCallback(async () => {
    try{
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    }catch(error){
      console.log(error)
    }
  }, [dispatch])

  useEffect(() => {
    initApp().then(()=> setLoading(false))
  },[initApp])
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
      <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
      <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      {loading ?  <LoadingComponent message = "Inittialising App..."/> 
        :location.pathname === '/' ? <HomePage/>
        : <Container sx={{mb: 4}}>
            <Outlet />
          </Container>
      }

    </ThemeProvider>
  );
}

export default App;

