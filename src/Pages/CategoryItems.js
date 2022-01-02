import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from "axios"
export default function CategoryItems() {
    const params = useParams()
    const [product_list, setProducts] = useState([])
    useEffect(getProducts, [])

    function getProducts() {
        axios.get(`https://fakestoreapi.com/products/category/${params.categoryName}`)
            .then(result => {
                console.log(result.data)
                setProducts(result.data) 
            })
    }

    return <div className="products">
        {product_list.map( p => {
            <Link to={}></Link>
        })}
    </div>
}