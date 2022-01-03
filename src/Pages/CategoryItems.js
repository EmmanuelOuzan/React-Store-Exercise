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
                setProducts(result.data)
            })
    }

    return <div className="products">
        {product_list.map(p => {
            return (<Link to={`/products/${p.id}`} className="item" key={p.id} >
                <div className="item_img" style={{ backgroundImage: `url(${p.image})` }} alt="ImageMissing!"></div>
                <h6 className="item_title">{p.title}</h6>
                <span className="priceTag">{p.price}$</span>
            </Link>);
        })}
    </div>
}