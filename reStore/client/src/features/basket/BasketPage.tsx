import { Button, Grid, Typography } from "@mui/material";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import BasketTable from "./BasketTable";

export default function BasketPage(){
    // const {basket, setBasket, removeItem} = useStoreContext();
    const { basket, status } = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();


    if(!basket) return <Typography variant='h3'>Your basket is empty</Typography>
    console.log(basket);
    return (
      <>
      <BasketTable items={basket.items}/>
      <Grid container>
              <Grid item xs={6}/>
              <Grid item xs={6}>
                <BasketSummary/>
                <Button
                component={Link}
                to='/checkout'
                variant='contained'
                size='large'
                fullWidth
                >
                  Checkout
                </Button>
              </Grid>
      </Grid>
      </>
        
    )
}