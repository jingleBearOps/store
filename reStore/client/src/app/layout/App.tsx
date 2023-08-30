import { useEffect, useState } from 'react';
import { Product } from '../models/product';
const products = [
  {name:'product1', price: 100.00},
  {name:'product2', price: 200.00},
  {name:'product3', price: 300.00},
]
function App() {
  const [products, setProducts] = useState<Product []>([]);
  useEffect(()=>{
    fetch('http://localhost:5000/api/Products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])
  function addProduct(){
    setProducts(prevState => [...prevState, {
      id: prevState.length  + 1001,
      name: 'product' + (prevState.length + 1),
      price: (prevState.length * 100) + 100,
      brand: 'some brand',
      description: 'blabla',
      pictureUrl: 'http://picsum.photos/200'
    }])
  }
  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map((product, index)=>{
            return <li key = {index}> {product.name} - {product.price}</li>
          })}
      </ul>
      <button onClick={addProduct}> Add</button>
      <>{console.log(123)}</>
    </div>
  );
}

export default App;
