import { Fragment } from "react";
import ProductList from "./ProductList";
import { useEffect } from 'react';
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchFilters, fetchProductsAsync, productSelectors } from "./catalogSlice";
import { Grid } from "@mui/material";


export default function Catalog(){
    // const [products, setProducts] = useState<Product []>([]);
    const products = useAppSelector(productSelectors.selectAll);
    const { productsLoaded, status, filtersLoaded } = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();
    // const [loading, setLoading] = useState(true);

    useEffect(()=>{
      if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch])

    useEffect(()=>{
      if (!filtersLoaded) dispatch(fetchFilters());
    }, [dispatch, filtersLoaded])

    if (status.includes('pending')) return <LoadingComponent message='Loading products...'/>
    console.log(products);
    return (
        <Grid container spacing = {4}>
            <Grid item xs = {3}>

            </Grid>
            <Grid item xs = {9}>
              <ProductList products={products}></ProductList>
            </Grid>
      </Grid>
    )
}