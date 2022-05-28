import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CardProduct from '../Components/CardProduct';
import "../styles/card-product.css";
function SpecifiedCategory() {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");
    const [sortType, setSortType] = useState(1);
    useEffect(() => {
        axios.get(`http://localhost:3001/categories/${id}`).then((response) => {
            setCategory(response.data.category)
        })
        axios.get(`http://localhost:3001/products/byCategory/${id}`).then((response) => {
            setProducts(response.data);
            
        })
    },[])
    useEffect(() => {
        const sort = (type) => {
            if (type==2) {
                const sortProduct = [...products].sort((a,b) => a.price - b.price)
                setProducts(sortProduct)
            }
            else {
                const sortProduct = [...products].sort((a,b) => b.price - a.price)
                setProducts(sortProduct)
            }
        }
        sort(sortType)
    },[sortType])
    
  return (
    <div className="product-list pt-5">
        <h1  class= "text-center mt-5">{category}</h1>
        <select 
            class= "d-flex my-3 mx-auto w-25 p-2 rounded form-control form-control-lg text-center" 
            name="order" id="" onChange={(e) => setSortType(e.target.value)}>
            <option value="1" class="h5">From highest to lowest</option>
            <option value="2" class="h5"> From lowest to highest</option>
        </select>
        <div className="items" style={{whiteSpace: 'normal', marginLeft: '7.5rem'}}>
            {products.map(product => (
                <div key={product.id} style={{display: 'inline'}}>
                    <CardProduct product={product}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SpecifiedCategory