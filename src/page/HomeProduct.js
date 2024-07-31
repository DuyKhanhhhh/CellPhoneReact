import React, { useEffect, useState } from 'react'
import HeaderHome from '../layout/HeaderHome'
import FooterHome from '../layout/FooterHome'
import "../css/HomeProduct.css"
import { FaFilter, FaSortAmountDown, FaSortAmountUpAlt, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeaderBreadcrumb from '../layout/HeaderBreadcrumb';


export default function HomeProduct() {
    const [product, setProduct] = useState([]);

    async function getProduct() {
        const response = await axios.get(`http://localhost:8080/api/product`)
        console.log(response.data);
        setProduct(response.data)
    };

    useEffect(() => {
        getProduct();

    }, []);

    function formatNumberWithCommas(number) {
        return number.toLocaleString('de-DE');
    }

    return (
        <div>
            <HeaderHome />
            <HeaderBreadcrumb />
            <div className='main site_main '>
                <div className='mt-2 mb-2 container'>
                    <h1 class="title_main">Điện thoại - Apple iPhone, Samsung, Xiaomi, Nokia, Tecno..</h1>
                </div>
                <div className='container'>
                    <div className='detail-category mb-1'>
                        <div className='css-content'>
                            <p>Mua điện thoại tại click buy giá rẻ hơn bao giờ hết - săn khuyến mãi với những giờ vàng chạy chương trình quý khách sẽ được nhiều ưu đãi bất ngờ</p>
                            <h2>Điện thoại chính hãng và thu cũ đổi mới của clickbuy bảo hành 2 năm</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-list list-cate'>
                <div className='container'>
                    <div className='section-list__item'>
                        iPhone
                    </div>
                    <div className='section-list__item'>
                        Samsung
                    </div>
                    <div className='section-list__item'>
                        Xiaomi
                    </div>
                    <div className='section-list__item'>
                        Nokia
                    </div>
                    <div className='section-list__item'>
                        Realme
                    </div>
                    <div className='section-list__item'>
                        Oppo
                    </div>

                </div>
            </div>
            <div className='section-list list-filter'>
                <div className='container'>
                    <div className='section-list__title'>
                        <p>Chọn tiêu chí</p>
                    </div>
                    <div className='section-list__content'>
                        <div className='section-list__item total-filter'>
                            <span><FaFilter /> Bộ lọc
                            </span>
                        </div>
                        <div className='section-list__item filter-1'>
                            <span>Giá</span>
                        </div>
                        <div className='section-list__item filter-1'>
                            <span>Bộ nhớ trong</span>
                        </div>
                        <div className='section-list__item filter-1'>
                            <span>Dung lượng</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-list list-sort'>
                <div className='container'>
                    <div className='section-list__title'>
                        <p>Sắp xếp theo</p>
                    </div>
                    <div className='section-list__content'>
                        <div className='section-list__item '>
                            <FaSortAmountDown /> Giá Cao - Thấp
                        </div>
                        <div className='section-list__item '>
                            <FaSortAmountUpAlt /> Giá Thấp - Cao
                        </div>
                        <div className='section-list__item '>
                            <BiShow /> Xem
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-product'>
                <div className='container'>
                    <div className='section-product__content'>
                        <div className='product-list list-products'>
                            {product.map((item) => (
                                <Link to={`/detailProduct/${item.id}`}>
                                    <div className='list-products__item'>
                                        <div className='thumbnail'>
                                            <img className='lazyload' src={item.image}></img>
                                        </div>
                                        <div className='detail'>
                                            <h3 className='title_name'>{item.name}</h3>
                                            <div className='price mb-12'>
                                                <span>{formatNumberWithCommas(item.price)}đ</span>
                                            </div>
                                            <div className='extra_tick'>
                                                <label className='installment'>Trả góp 0% </label>
                                                <label className='freeship'>Miễn phí ship </label>
                                            </div>
                                            <div className='block-rate_product'>
                                                <div className='block-rate__star'>
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStarHalfAlt />
                                                </div>
                                                <div className="rate_title">
                                                    (45 đánh giá)
                                                </div>
                                            </div>
                                            <div className="cb_promotion_stand">
                                                <div className="gift-detail">
                                                    <span className=':before'></span>
                                                    HSSV giảm thêm <span className="js-format-price">300.000 ₫</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <FooterHome />
        </div >
    )
}
