import React, { useEffect, useState } from 'react'
import HomeProduct from './HomeProduct'
import FooterHome from '../layout/FooterHome'
import HeaderHome from '../layout/HeaderHome'
import HeaderBreadcrumb from '../layout/HeaderBreadcrumb'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "../css/DetailProduct.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductDetailMemory from '../components/ProductDetailMemory'
import ProductDetailColor from '../components/ProductDetailColor'
import ProductDetailPrice from '../components/ProductDetailPrice'
import ProductTable from '../components/ProductTable'

export default function DetailProduct() {
    const params = useParams();
    const [product, setProduct] = useState([]);
    console.log('render');
    async function getProduct() {
        const response = await axios.get(`http://localhost:8080/api/product/${params.id}`)
        // console.log(response.data);
        setProduct(response.data)
    };

    function formatNumberWithCommas(number) {
        return number.toLocaleString('de-DE');
    }

    useEffect(() => {
        getProduct();

    }, []);

    return (
        <div>
            <HeaderHome />
            <HeaderBreadcrumb />
            <div className='product-top'>
                <div className='container'>
                    <h1 className='product-name'>{product.name}</h1>
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
                    <div className='row'>
                        <div className='col col-xs-5 col-sm-5 col-md-5 col-lg-5'>
                            <div className='product-slide'>
                                <div>
                                    <ing></ing>
                                </div>
                            </div>
                            <div className='condition'>
                                <div className='condition-title' >
                                    <p>Thông tin sản phẩm</p>
                                </div>
                                <div className='condition-content'>
                                    <p>{product.detail}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>

                            <ProductTable idProduct={params.id} />
                            <div className="variant">


                                <div className="warranty">
                                    <div className="warranty-title">

                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M21.0463 5.49846C21.1395 6.71873 21.2804 10.0468 20.5004 14C19.7028 18.0424 14.6383 20.7776 12.7277 21.6769C12.2638 21.8953 11.7352 21.8953 11.2713 21.6769C9.36088 20.7775 4.29699 18.0424 3.49952 14C2.7196 10.0465 2.86094 6.71827 2.95427 5.49821C2.97838 5.18299 3.15935 4.90933 3.43857 4.7611C4.77687 4.05062 8.90731 2 11.9989 2C15.0904 2 19.2228 4.05058 20.5618 4.76108C20.8412 4.90932 21.0222 5.18311 21.0463 5.49846Z"
                                                stroke="#121219"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M9.00017 11.665L10.9365 13.878C11.1428 14.1137 11.5125 14.1039 11.706 13.8577L15.0002 9.66504"
                                                stroke="#121219"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <p>Bảo hành</p>
                                    </div>
                                    <div className="warranty-content">
                                        <div
                                            className="list-variant list key_2 list-variant--warranty"
                                        >
                                            <div
                                                className="list-variant__item list-item check active"
                                                title="BH chính hãng"
                                            >
                                                <p className="active">
                                                    <span>
                                                        BH chính hãng
                                                        <br />
                                                        <span
                                                            className="font-red js-format-price_warranty"
                                                        >
                                                            Miễn phí
                                                        </span>
                                                        <br />
                                                        <span className="font-normal" />
                                                    </span>
                                                </p>
                                            </div>
                                            <div
                                                className="list-variant__item list-item check"
                                                title="Gia Hạn 24 tháng"
                                            >
                                                <p className="" data-name="Gia Hạn 24 tháng">
                                                    <span>
                                                        Gia Hạn 24 tháng
                                                        <br />
                                                        <span
                                                            className="font-red js-format-price_warranty"
                                                        >
                                                            + 1.000.000 ₫
                                                        </span>
                                                        <br />
                                                        <span className="font-normal" />
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gift">
                                <div className="gift-title km-hssv">
                                    <p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1em"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z" />
                                        </svg>
                                        Khuyến mãi
                                    </p>
                                    <div className="gift-hssv">
                                        HỌC SINH - SINH VIÊN
                                        <br />
                                        Giảm{" "}
                                        <span className="js-format-price text-white" data-price={300000}>
                                            300.000 ₫
                                        </span>
                                    </div>
                                </div>
                                <div className="gift-content">
                                    <p>
                                        <span style={{ color: "#003300" }}>
                                            Trả góp 0% lãi - 0 phụ phí - Trả trước 0 đồng kỳ hạn 3-6 tháng{" "}
                                        </span>
                                        <em>
                                            <span style={{ color: "#003300" }}>(</span>
                                            <a
                                                href="https://clickbuy.com.vn/chuong-trinh-tra-gop-3-khong-danh-cho-khach-hang-mua-san-pham-apple"
                                                previewlistener="true"
                                            >
                                                <span style={{ color: "#003300" }}>chi tiết</span>
                                            </a>
                                            <span style={{ color: "#003300" }}>)</span>
                                        </em>
                                    </p>
                                    <p>
                                        <span style={{ color: "#003300" }}>
                                            Tặng gói bảo hành Rơi vỡ - Vào nước
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ color: "#003300" }}>
                                            Hỗ trợ chuyển đổi Esim miễn phí ngay tại shop
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ color: "#003300" }}>
                                            Thu cũ - Đổi mới trợ giá lên đến{" "}
                                        </span>
                                        <span style={{ color: "#e74c3c" }}>
                                            <strong>1.000.000đ</strong>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ color: "#003300" }}>
                                            Tặng sạc Anker/ Innostyle 20W chính hãng khi gia hạn bảo hành 24 tháng
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ color: "#003300" }}>
                                            Giảm ngay 10% khi mua phụ kiện khi nâng cấp bảo hành vàng
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ color: "#003300" }}>
                                            Ưu đãi mua Combo phụ kiện giá cực sốc tiết kiệm đến{" "}
                                        </span>
                                        <span style={{ color: "#e74c3c" }}>
                                            <strong>300.000đ</strong>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ color: "#003300" }}>Giảm thêm </span>
                                        <span style={{ color: "#e74c3c" }}>
                                            <strong>100.000đ</strong>{" "}
                                        </span>
                                        <span style={{ color: "#003300" }}>khi mua kèm iPad/Apple Watch</span>
                                    </p>
                                </div>
                            </div>
                            <div className="product-action">
                                <p className="add-to-cart">
                                    Mua ngay <span>(nhận tại cửa hàng hoặc giao tận nhà)</span>
                                </p>
                                <div className="flex product-action-installment">
                                    <a
                                        href="/tra-gop/?&product_id=197366&variant_id=115393"
                                        rel="nofollow"
                                        className="product-action__item installment-card"
                                    >
                                        Trả góp cty tài chính <span>(xét duyệt online)</span>
                                    </a>
                                    <a
                                        href="/tra-gop-the-tin-dung/?t=1&product_id=197366&variant_id=115393"
                                        rel="nofollow"
                                        className="product-action__item installment-online"
                                    >
                                        Trả góp 0% thẻ tín dụng<span>(Visa, MasterCard, JCB)</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                            <div className="product-policy">
                                <div className="product-policy__title">
                                    <p>Chính sách bảo hành</p>
                                </div>
                                <div className="product-policy__content">
                                    <p>
                                        <span style={{ color: "#006600" }}>Bảo hành chính hãng 12 tháng </span>
                                        <span style={{ color: "#ff0000" }}>( Miễn phí ):</span>
                                        <span style={{ color: "#333300" }}> </span>Bảo hành sửa chữa thay thế linh
                                        kiện tại các trung tâm bảo hành ủy quyền của Apple. Bao test đổi sản phẩm
                                        lỗi 30 ngày.
                                    </p>
                                    <p>
                                        <span style={{ color: "#006600" }}>Gia hạn bảo hành 24 tháng </span>
                                        <span style={{ color: "#ff0000" }}>( + 1.000.000đ):</span> Năm đầu bảo
                                        hành chính hãng, năm 2 bảo hành 1 đổi 1 máy tương đương. Bảo hành rơi vỡ,
                                        vào nước 24 tháng.
                                    </p>
                                </div>
                            </div>
                            <div className="product-policy">
                                <div className="product-policy__title">
                                    <p>Khách hàng doanh nghiệp</p>
                                </div>
                                <div className="product-policy__content">
                                    <p>
                                        <span
                                            style={{
                                                color: "#006600",
                                                fontWeight: 700,
                                                fontSize: "12px !important"
                                            }}
                                        >
                                            Các đối tác doanh nghiệp, vui lòng liên hệ Phòng Kinh Doanh B2B để được
                                            hỗ trợ tốt nhất
                                        </span>
                                    </p>
                                    <ul>
                                        <li>
                                            <strong style={{ fontSize: "12px !important" }}>
                                                Mr.Ngọc:
                                                <span style={{ color: "#ff0000" }}>093 264 0089</span>
                                            </strong>
                                        </li>
                                        <li>
                                            <strong style={{ fontSize: "12px !important" }}>
                                                Email:
                                                <span style={{ color: "#ff0000", fontSize: "12px !important" }}>
                                                    doanhnghiep@clickbuy.com.vn
                                                </span>
                                            </strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="load-area">
                                <div className="area">
                                    <div className="area-title">
                                        <p>Địa chỉ cửa hàng</p>
                                    </div>
                                    <div className="area-select">
                                        <select name="area">
                                            <option value={1} selected="">
                                                Miền Bắc
                                            </option>
                                            <option value={2}>Nghệ An - Đà Nẵng</option>
                                            <option value={3}>Miền Nam</option>
                                        </select>
                                    </div>
                                    <div id="area-list-1" className="area-list show">
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=7"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                367 Cầu Giấy, Hà Nội::{" "}
                                                <span className="phone-number">0911542468</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=8"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                111 Trần Đăng Ninh, Cầu Giấy, Hà Nội::{" "}
                                                <span className="phone-number">0976732468</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=10"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                118 Thái hà, Đống Đa, Hà Nội::{" "}
                                                <span className="phone-number">0964242468</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=9"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                446 Xã Đàn, Đống Đa, Hà Nội::{" "}
                                                <span className="phone-number">0961112468</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=12"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                312 Nguyễn Trãi, P.Trung Văn, Q.Nam Từ Liêm, Hà Nội (gần Đại Học Hà
                                                Nội): <span className="phone-number">0946982468</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=6"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                380 Trần Phú, Ba Đình, TP.Thanh Hóa::{" "}
                                                <span className="phone-number">0969142468</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=13"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                Ngã 3 Đông Yên, Yên Phong, Bắc Ninh (Khu công nghiệp Yên Phong):{" "}
                                                <span className="phone-number">0941442468</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=14"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                269 Nguyễn Hữu Tiến, TT Đồng Văn, Duy Tiên, Hà Nam:{" "}
                                                <span className="phone-number">0357.209.209</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=15"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                TTBH Hà Nội: Tầng 2, số 111 Trần Đăng Ninh, Cầu Giấy, Hà Nội:{" "}
                                                <span className="phone-number">024.6683.9292</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div id="area-list-2" className="area-list ">
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=11"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                161 Hàm Nghi, Q.Thanh Khê, TP.Đà Nẵng::{" "}
                                                <span className="phone-number">0799101799</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=16"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                233 Lê Duẩn, TP Vinh, Nghệ An:{" "}
                                                <span className="phone-number">0989961233</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div id="area-list-3" className="area-list ">
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=22"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                290A Xô Viết Nghệ Tĩnh, Phường 25, Bình Thạnh, Tp HCM - Ngã Tư Hàng
                                                Xanh: <span className="phone-number">0866790290</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=1"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                379 Hoàng Văn Thụ, P2, Q.Tân Bình, HCM:{" "}
                                                <span className="phone-number">0984768260</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=2"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                42 Trần Quang Khải , Tân Định , Quận 1, HCM:{" "}
                                                <span className="phone-number">0968371357</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=3"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                499 Nguyễn Thị Thập, Q.7, HCM:{" "}
                                                <span className="phone-number">0964750268</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=4"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                466 Quang Trung, P.10, Q.Gò Vấp, HCM:{" "}
                                                <span className="phone-number">0826392468</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=17"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                269B Hậu Giang, P5, Q.6, HCM:{" "}
                                                <span className="phone-number">0976893579</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=18"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                535 Lê Hồng Phong, Q.10, HCM:{" "}
                                                <span className="phone-number">0961662468</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=19"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                98 Võ Văn Ngân, TP.Thủ Đức, HCM:{" "}
                                                <span className="phone-number">0379790229</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=20"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                Trung Tâm Bảo Hành 1: 377 Hoàng Văn Thụ, P.2, Q.Tân Bình, HCM:{" "}
                                                <span className="phone-number">0905524580</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                        <div
                                            className="area-list__item"
                                            data-fancybox="showmap"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=21"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>
                                                Trung Tâm Bảo Hành 2: 98 Võ Văn Ngân, Tp.Thủ Đức, HCM:{" "}
                                                <span className="phone-number">0973903973</span> -{" "}
                                                <b>Bản đồ đường đi</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <FooterHome />
        </div>
    )
}
