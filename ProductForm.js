import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productsActions";
import { InputRounded } from "@mui/icons-material";
const ProductForm = () =>{
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            title,
            price: parseFloat(price),
            description, image,
        };
        dispatch(addProduct(newProduct));
        setTitle("");
        setPrice("");
        setDescription("");
        setImage("");
    };
    return (
        <form onSubmit={handleSubmit} style={{margin: '20px 0'}}>
            <h2>Add new</h2>
            <input type="text" placeholder="Product title" value={title} onChange={(e)=>setTitle(e.target.value)} required></input>
            <input type="number" placeholder="price" value={price} onChange={(e)=>setPrice(e.target.value)} required></input>
            <textarea placeholder="description" value={description} onChange={(e)=>setDescription(e.target.value)} required></textarea>
            <input type="text" placeholder="image URL" value={image} onChange={(e)=>setImage(e.target.value)} required></input>
            <button type="submit">add products</button>
        </form>
    );
};
export default ProductForm;