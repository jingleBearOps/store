import { Fragment } from "react";
import { Product } from "../../app/models/product"
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Button } from "@mui/material";

interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props){
    return (
        <Fragment>
            <h1>Catalog</h1>
            <List>
            {products.map((product)=>{
                return <ListItem key = {product.id}>
                    <ListItemAvatar>
                        <Avatar src={product.pictureUrl}>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                        {product.name} - {product.price}
                    </ListItemText>
                </ListItem>
            })}
        </List>
        <Button variant="contained" onClick={addProduct}> Add</Button>
        <>{console.log(123)}</>
      </Fragment>
    )
}