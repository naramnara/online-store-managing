import React from "react";
import { useSelector } from "react-redux";
const ProductList = () =>{
    const products = useSelector((state)=>state.products.items);
    return (
        <div>
            <h2>product list</h2>
            {products.length===0?(
                <div>no products added yet</div>
            ):(products.map((product)=>(
                <div key={product.id} style={{border:'1px solid #ddd', borderRadius:'5px', padding:'10px', margin:'10px'}}>
                    <img src={product.image} alt={product.title} style={{width:'100px'}}></img>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>${product.price.toFixed(2)}</p>
                </div>
            )))}
        </div>
    );
};
export default ProductList;