import React, { useEffect, useState } from 'react'
import ProductDetailPrice from './ProductDetailPrice';
import ProductDetailMemory from './ProductDetailMemory';
import ProductDetailColor from './ProductDetailColor';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProductTable({ idProduct }) {
    const [productDetail, setDetailProduct] = useState([]);
    const [price, setPrice] = useState('');


    async function getDetailProduct() {
        const response = await axios.get(`http://localhost:8080/api/detailProduct/${idProduct}`)
        setDetailProduct(response.data);
        setPrice(response.data[0].price)
        console.log(response.data)
    };

    useEffect(() => {
        getDetailProduct();
    }, [])


    return (
        <>
            <ProductDetailPrice price={price} />
            <ProductDetailMemory id={idProduct} productDetail={productDetail} />
            <ProductDetailColor productDetail={productDetail} />
        </>
    )
}
