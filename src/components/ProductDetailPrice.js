import React, { useEffect, useState } from 'react'
import { formatNumberWithCommas } from '../Service/FormartNumber'

export default function ProductDetailPrice({ price }) {
    const [priceGet, setPriceGet] = useState(price);
    var priceValue = sessionStorage.getItem("price");
    useEffect(() => {
        setPriceGet(priceValue);
        console.log(priceGet);
    }, [price]);


    return (
        <div>
            <div className='flex product-price-container'>
                <div className="flex product-price-container">
                    <div className="product-price text-right">
                        <p className="price">{formatNumberWithCommas(priceValue)}đ</p>
                    </div>
                    <div className="product-installment text-right">
                        <span>Trả góp 0%</span>
                        <p>
                            Trả góp chỉ từ <b>0đ</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
