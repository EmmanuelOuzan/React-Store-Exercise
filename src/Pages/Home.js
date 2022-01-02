import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
export default function Home() {
    const [categories, setCategories] = useState([])
    useEffect(getCategories, [])

    function getCategories() {
        axios.get("https://fakestoreapi.com/products/categories")
            .then(result => {
                console.log(result.data)
                setCategories(result.data)
            })
    }

    return (
        <div className='category_parent'>
            <div className='category' > {categories.map(c => {
                return <Link to={`/category/${c}`} key={c} className='categoryBox' >
                    <strong>{c}</strong>
                </Link>
            })}

            </div>
        </div>);
}

// <Link to="/category/{}"><h1>${c}</h1></Link>
// {categories.map(c =>
//console.log(c))}
