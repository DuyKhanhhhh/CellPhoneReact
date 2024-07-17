import React from 'react'
import HeaderHome from '../layout/HeaderHome'
import FooterHome from '../layout/FooterHome'
import "../css/HomeProduct.css"
import { CiViewList } from "react-icons/ci";
import { IoHomeSharp } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { FaFilter, FaSortAmountDown, FaSortAmountUpAlt } from "react-icons/fa";
import { BiShow } from "react-icons/bi";



export default function HomeProduct() {
    return (
        <div>
            <HeaderHome />
            <div className='header-breadcrumb'>
                <div className='container'>
                    <div class="header-breadcrumb__wrapper">
                        <div className='header-breadcrumb__icon'>
                            <CiViewList className='icon-list' />
                        </div >
                        <ul className='header-breadcrumb__list'>
                            <li className='header-breadcrumb__item'><IoHomeSharp className='icon-white' /> <span>Trang chủ</span><MdNavigateNext className='icon-white' />
                            </li>
                            <li className='header-breadcrumb__item'> <span>Điện thoại</span></li>
                        </ul>
                    </div>
                </div>
            </div>
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
                    </div>
                    <div className='section-list__content'>
                        <div className='section-list__item '>
                            <FaSortAmountUpAlt /> Giá Thấp - Cao
                        </div>
                    </div>
                    <div className='section-list__content'>
                        <div className='section-list__item '>
                            <BiShow /> Xem
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-product'>
                <div className='container'>
                    <div className='section-product__content'></div>
                </div>
            </div>
            <FooterHome />
        </div >
    )
}
