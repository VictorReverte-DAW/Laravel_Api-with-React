import React,{useState,useEffect} from 'react'
import axios from  'axios';
import {useNavigate,useParams} from 'react-router-dom';

export const EditProducts = () => {

    const [_description,setDescription] = useState("");
    const [_price,setPrice] = useState(0);
    const [_stock,setStock] = useState(0);
    const navigate = useNavigate();
    const {id} = useParams();

    const endpoint = "http://127.0.0.1:8000/api/product/";

    const update = (e)=>{
        e.preventDefault();
        //"description" is a variable in api and "_description" is a local variable
        axios.put(`${endpoint}${id}`,{description:_description,price:_price,stock:_stock});
        navigate('/')
    }

    useEffect(()=>{
        const getProductById = async()=>{
            const response = await axios.get(`${endpoint}${id}`);
            setDescription(response.data.description);
            setPrice(response.data.price);
            setStock(response.data.stock);
        }
        getProductById()
    },[])

  return (
    <div>
    <h3>Edit Product</h3>
    <form onSubmit={update}>
        <div className='mb-3'>
            <label className='form-label'>Description</label>
            <input value={_description} onChange={(e)=>setDescription(e.target.value)} type="text" className='form-control'/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Precio</label>
            <input value={_price} onChange={(e)=>setPrice(e.target.value)} type="number" className='form-control'/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Stock</label>
            <input value={_stock} onChange={(e)=>setStock(e.target.value)} type="number" className='form-control'/>
        </div>
        <button type='submit' className='btn btn-primary'>Store</button>
    </form>
</div>
  )
}
