import { Fragment } from "react";
import ProductList from "./ProductList";
import { useEffect } from 'react';
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchFilters, fetchProductsAsync, productSelectors } from "./catalogSlice";


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
        <Fragment>
            <h1>Catalog</h1>
            <ProductList products={products}></ProductList>
      </Fragment>
    )
}