import React from 'react'
import { Link } from 'react-router-dom'
import '../css/HeaderHome.css'
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function HeaderHome() {
    return (
        <div>
            <header className='main-header'>
                <div className='header-top'>
                    <div className='container flex'>
                        <div className='logo'>
                            {/* <Link to={`/`}> */}
                            <img className='' src='https://clickbuy.com.vn/uploads/images/logo/clickbuy-logo.png'></img>
                            {/* </Link> */}
                        </div>
                        <div className='search'>
                            <form>
                                <input className='color-white' type='text' name='key' placeholder='Bạn cần tìm gì...' />
                                <button aria-label='Tim Kiem' name='search'><FaSearch className='iconSearch' /></button>
                            </form>
                        </div>
                        <div className="location-switch">
                            <div className="location-select-wrapper">
                                <div className="current-location">
                                    <span className="location-text">Xem giá tại</span>
                                    <FaLocationDot />
                                </div>
                                <span className="my_location">Miền Bắc</span>
                                <select
                                    className="location-select"
                                    name="location_name"
                                    aria-label="Location"
                                >
                                    <option value={1} selected="">
                                        Miền Bắc
                                    </option>
                                    <option value={2}>Nghệ An - Đà Nẵng</option>
                                    <option value={3}>Miền Nam</option>
                                </select>
                            </div>
                        </div>
                        <div className="info_website">
                            <div className="hotline info_website_item">
                                <a
                                    href="tel:0866634503"
                                    title="Hotline Miền Bắc"
                                    aria-label="Hotline Miền Bắc"
                                >
                                    <div className="hotline_icon info_website_icon">
                                        <svg
                                            className="feather feather-phone-call"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <span>
                                        Gọi mua hàng
                                        <br />
                                        <span className="phone-number">0866634503</span>
                                    </span>
                                </a>
                            </div>
                            <div className="cart info_website_item">
                                <a
                                    href="/gio-hang"
                                    title="Chi tiết giỏ hàng"
                                    aria-label="Chi tiết giỏ hàng"
                                >
                                    <div className="cart_icon info_website_icon">
                                        <span className="cart_counter">0</span>
                                        <svg
                                            style={{ fill: "#fff" }}
                                            enableBackground="new 0 0 208.955 208.955"
                                            version="1.1"
                                            viewBox="0 0 208.96 208.96"
                                            xmlSpace="preserve"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m190.85 200.23-12.715-141.6c-0.347-3.867-3.588-6.829-7.47-6.829h-26.221v-11.826c0-22.04-17.93-39.971-39.969-39.971-22.038 0-39.966 17.931-39.966 39.971v11.826h-26.239c-3.882 0-7.123 2.962-7.47 6.829l-12.765 142.16c-0.188 2.098 0.514 4.177 1.935 5.731s3.43 2.439 5.535 2.439h157.93 0.02c4.143 0 7.5-3.358 7.5-7.5-1e-3 -0.417-0.035-0.828-0.101-1.227zm-111.34-160.26c0-13.769 11.2-24.971 24.967-24.971 13.768 0 24.969 11.202 24.969 24.971v11.826h-49.936v-11.826zm-45.8 153.98 11.418-127.16h19.382v13.412c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-13.412h49.936v13.412c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-13.412h19.364l11.418 127.16h-141.52z" />
                                        </svg>
                                    </div>
                                    <span>
                                        Chi tiết
                                        <br />
                                        <span>Giỏ Hàng</span>
                                    </span>
                                </a>
                            </div>
                            <div className="policy info_website_item">
                                <a
                                    href="/trang/chinh-sach-bao-hanh.html"
                                    title="Chính sách bảo hành"
                                    aria-label="Chính sách bảo hành"
                                >
                                    <div className="policy_icon info_website_icon">
                                        <svg
                                            style={{ fill: "#fff" }}
                                            enableBackground="new 0 0 187 187"
                                            version="1.1"
                                            viewBox="0 0 187 187"
                                            xmlSpace="preserve"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m118.3 76c-7.1 7.2-14.5 14.1-21.3 21.5-3.1 3.3-4.9 3-7.5-0.2-2.3-2.8-5.2-5.3-7.9-7.8-1.9-1.7-4.2-1.8-6.3-0.6-1.6 0.9-2.7 2.5-2.7 4.6 0 3.4 17.3 20.9 20.7 20.9 2.5-0.1 4.1-1.7 5.7-3.3 9-9 18-18.1 27.1-27.1 2.8-2.8 5.2-5.9 1.7-9.5-3.6-3.7-6.7-1.3-9.5 1.5z" />
                                            <path d="m167 43.2c-0.1-4.5-3.2-5.8-7.2-5.8-20.7-0.3-39.2-6.4-54.5-20.9-2.9-2.7-5.9-2.7-8.7 0-15.3 14.5-33.8 20.6-54.6 20.8-5.3 0.1-7.3 2.8-7.3 7.8 0.1 7.2 0 14.4 0 21.6h-0.6c0.4 7.8 0.7 15.6 1.3 23.4 3.1 39.9 23 67.2 60.8 81.1 2.3 0.8 4.5 1.9 7.1 0.9 28.1-10.3 49.5-27.4 58.3-57.2 7.2-23.5 6.1-47.6 5.4-71.7zm-10.6 10.2c-0.3 5.1-0.1 10.3-0.1 15.4-0.3 19.8-1 39.5-11 57.4-9.5 17-24.5 27.2-42.2 34.2-2.3 0.9-3.9 0-5.8-0.7-31.3-12.2-47.8-35.4-50.7-68.6-1.1-12.7-1-25.5-1-38.2 0-3.8 1.4-4.9 5-5.1 17.7-1 33.7-6.7 47.5-18 2.1-1.8 3.6-1.9 5.7-0.1 13.8 11.4 29.8 17.1 47.5 18.1 4.2 0.1 5.3 1.8 5.1 5.6z" />
                                        </svg>
                                    </div>
                                    <span>
                                        Chính sách
                                        <br />
                                        <span>Bảo Hành</span>
                                    </span>
                                </a>
                            </div>
                            <div className="policy info_website_item">
                                <a
                                    href="/he-thong-cua-hang"
                                    title="Hệ thống cửa hàng"
                                    aria-label="Hệ thống cửa hàng"
                                >
                                    <div className="policy_icon info_website_icon">
                                        <svg
                                            style={{ fill: "#fff" }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 384 512"
                                        >
                                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                        </svg>
                                    </div>
                                    <span>
                                        Hệ thống
                                        <br />
                                        <span>Cửa hàng</span>
                                    </span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </header >
        </div >
    )
}
