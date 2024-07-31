import React from 'react'
import "../css/HomeProduct.css"
import { CiViewList } from "react-icons/ci";
import { IoHomeSharp } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";

export default function HeaderBreadcrumb() {

    return (
        <div>
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
        </div>
    )
}
