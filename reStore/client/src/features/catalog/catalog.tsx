import { Fragment } from "react";
import ProductList from "./ProductList";
import { Product } from "../../app/models/product"
import { useEffect, useState } from 'react';
import agent from "../../app/api/agent";


export default function Catalog(){
    const [products, setProducts] = useState<Product []>([]);
    useEffect(()=>{
      agent.Catalog.list().then(products => setProducts(products))
    }, [])
    return (
        <Fragment>
            <h1>Catalog</h1>
            <ProductList products={products}></ProductList>
      </Fragment>
    )
}