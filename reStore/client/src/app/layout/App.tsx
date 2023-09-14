import {CssBaseline} from "@mui/material";
import Header from "./Header";
import { Container } from "@mui/system";
import {ThemeProvider, createTheme} from '@mui/material/styles'
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
// import { useStoreContext } from "../context/StoreContext";
import { setBasket } from "../../features/basket/basketSlice";
import { useAppDispatch } from "../store/configureStore";
import { fetchCurrentUser } from "../../features/account/accountSlice";
// const products = [
//   {name:'product1', price: 100.00},
//   {name:'product2', price: 200.00},
//   {name:'product3', price: 300.00},
// ]

function App() {
  const dispatch  = useAppDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    dispatch(fetchCurrentUser());
    if (buyerId) {
      agent.Basket.get()
        .then(basket => dispatch(setBasket(basket)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }else{
      setLoading(false);
    }
  },[dispatch])
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
  if (loading) return <LoadingComponent message = "Inittialising App..."/>
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
      <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;

