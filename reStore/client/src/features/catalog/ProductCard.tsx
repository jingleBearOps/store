import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Product } from "../../app/models/product"
import { Link } from "react-router-dom";
import { LoadingButton } from '@mui/lab';
import { currencyFormat } from "../../app/util/util";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync } from "../basket/basketSlice";

interface Props {
    product: Product;
}
export default function ProductCard({product}: Props){
  const { status } = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch()


    return (
        <Card >
            <CardHeader
                avatar={
                    <Avatar sx = {{bgcolor:"#454545"}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: "#FF6000"}
                }}
            />
        <CardMedia
          sx={{ height: 200, backgroundSize: 'contain', bgcolor: "white"}}//primary.light // white
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom  color = "#FF6000" variant="h5" component="div">
            {currencyFormat(product.price)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} /{product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <LoadingButton
          loading={status === ('pending + product.id')}
          onClick={()=>dispatch(addBasketItemAsync({productId: product.id}))}
          sx={{color: "#454545"}}
          size="small">
            Add to card
          </LoadingButton>
          <Button component={Link}  sx={{color: "#454545"}} to={`/catalog/${product.id}`} size="small">View</Button>
        </CardActions>
      </Card>
    )
}