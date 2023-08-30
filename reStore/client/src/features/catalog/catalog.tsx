import { Fragment } from "react";
import { Product } from "../../app/models/product"

interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props){
    return (
        <Fragment>
            <h1>Catalog</h1>
            <ul>
            {products.map((product)=>{
                return <li key = {product.id}> {product.name} - {product.price}</li>
            })}
        </ul>
        <button onClick={addProduct}> Add</button>
        <>{console.log(123)}</>
      </Fragment>
    )
}