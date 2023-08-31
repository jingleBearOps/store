import { Fragment } from "react";
import ProductList from "./ProductList";
import { Product } from "../../app/models/product"
import { useEffect, useState } from 'react';


export default function Catalog(){
    const [products, setProducts] = useState<Product []>([]);
    useEffect(()=>{
      fetch('http://localhost:5000/api/Products')
      .then(response => response.json())
      .then(data => setProducts(data))
    }, [])
    return (
        <Fragment>
            <h1>Catalog</h1>
            <ProductList products={products}></ProductList>
      </Fragment>
    )
}