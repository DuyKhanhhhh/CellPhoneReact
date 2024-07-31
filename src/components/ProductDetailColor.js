import React from 'react'
import { formatNumberWithCommas } from '../Service/FormartNumber'

export default function ProductDetailColor({ productDetail }) {
    return (
        <>
            <span className="list-title">Màu sắc:</span>
            <div className="list-variant list key_1" >

                {productDetail.map(item => (
                    <div className="list-variant__item list-item active">
                        <p
                            className="flex active"
                        >
                            <img
                                src="/uploads/images/2023/09/iphone-15-pro-max-xanh-1.png"
                            />
                            <span>
                                {item.color}
                                <br />
                                <span className="font-normal">{formatNumberWithCommas(item.price)}₫</span>
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}
