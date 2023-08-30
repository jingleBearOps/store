import { Fragment } from "react";
import { Button } from "@mui/material";
import ProductList from "./ProductList";
import { Product } from "../../app/models/product"

interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props){
    return (
        <Fragment>
            <h1>Catalog</h1>
            <ProductList products={products}></ProductList>
            <Button variant="contained" onClick={addProduct}> Add</Button>
      </Fragment>
    )
}