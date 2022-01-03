import { useParams, Link } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from "react";
export default function Item() {
    const params = useParams()
    const [product, setProduct] = useState();
    useEffect(getProductDetails,[])
    // function getProductDetails() {
    //     axios.get(https://fakestoreapi.com/products/)
    // }

}