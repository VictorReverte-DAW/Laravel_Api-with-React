import React, { useEffect,useState } from 'react'
import axios from  'axios';

import {Link} from 'react-router-dom';


const endpoint = "http://127.0.0.1:8000/api"
export const ShowProducts = () => {

    const [products, setProductos] = useState([]);
    useEffect(()=>{
        getAllProducts();
    },[]);

    const getAllProducts = async () =>{
       const response =  await axios.get(`${endpoint}/products`);
        setProductos(response.data)
    }
    const deleteProducts = async (id) =>{
        await axios.delete(`${endpoint}/product/${id}`);
        getAllProducts()
    }
  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg  mt-2 mb-2 text-white'>Create</Link>
        </div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) =>(
                    <tr key={product.id}>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>
                            <Link to={`/edit/${product.id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={()=>deleteProducts(product.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ShowProducts;
