import React from 'react'
import "../css/FooterHome.css"

export default function FooterHome() {
    return (
        <div>
            <footer className='footer'>
                <div className='container'>
                    <div className='footer-top flex fs-13'>
                        <div className='footer-top__item'>
                            <div className='h4 footer-top__title'>
                                <b >Chính sách bán hàng</b>
                            </div>
                            <p>Chính sách bảo hành</p>
                            <p>Chính sách mua hàng Online</p>
                            <p  >Chính sách bảo mật thông tin khách hàng</p>
                        </div>
                        <div className='footer-top-store footer-top__item'>
                            <div className='h4 footer-top__title'>
                                <b>Tổng đài hỗ trợ</b>
                                <span className='font400'>(Từ 8:00-21:00)</span>
                            </div>
                            <p className='footer-top__text'>
                                <span>Hotline bán hàng</span>
                                <b class="phone-number">1900.633.471</b>
                            </p>
                            <p className='footer-top__text'>
                                <span>Hotline bảo hành, kỹ thuật:</span>
                                <b class="phone-number">0246.683.9292</b>
                            </p>
                            <p className='footer-top__text'>
                                <span>Hotline hỗ trợ phần mềm:</span>
                                <b class="phone-number">0962.824.422</b>
                            </p>
                            <p className='footer-top__text'>
                                <span>Hotline phản ánh chất lượng dịch vụ:</span>
                                <b class="phone-number">1900.633.471</b>
                            </p>
                        </div>
                        <div className="footer-top__item footer_loation">
                            <ul id="region-menu">
                                <li className='action'>
                                    Khu vực
                                    <br />
                                    <strong>Miền Bắc</strong>
                                </li>
                                <li className='action'>
                                    Khu vực
                                    <br />
                                    <strong>Nghệ An - Đà Nẵng</strong>
                                </li>
                                <li className='action'>
                                    Khu vực
                                    <br />
                                    <strong>Miền Nam</strong>
                                </li>
                            </ul>
                            <div>
                                <div className="area_selection">
                                    <ul id="location-1" className="tab-pane active">
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=7"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">367 Cầu Giấy, Hà Nội:</span>:{" "}
                                            <a href="tel:0911542468" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0911542468 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=8"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">
                                                111 Trần Đăng Ninh, Cầu Giấy, Hà Nội:
                                            </span>
                                            :{" "}
                                            <a href="tel:0976732468" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0976732468 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=10"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">118 Thái hà, Đống Đa, Hà Nội:</span>:{" "}
                                            <a href="tel:0964242468" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0964242468 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=9"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">446 Xã Đàn, Đống Đa, Hà Nội:</span>:{" "}
                                            <a href="tel:0961112468" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0961112468 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=12"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">
                                                312 Nguyễn Trãi, P.Trung Văn, Q.Nam Từ Liêm, Hà Nội (gần Đại Học Hà Nội)
                                            </span>
                                            :{" "}
                                            <a href="tel:0946982468" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0946982468 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=6"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">
                                                380 Trần Phú, Ba Đình, TP.Thanh Hóa:
                                            </span>
                                            :{" "}
                                            <a href="tel:0969142468" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0969142468 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=13"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">
                                                Ngã 3 Đông Yên, Yên Phong, Bắc Ninh (Khu công nghiệp Yên Phong)
                                            </span>
                                            :{" "}
                                            <a href="tel:0941442468" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0941442468 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=14"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">
                                                269 Nguyễn Hữu Tiến, TT Đồng Văn, Duy Tiên, Hà Nam
                                            </span>
                                            :{" "}
                                            <a href="tel:0357.209.209" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0357.209.209 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=15"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">
                                                TTBH Hà Nội: Tầng 2, số 111 Trần Đăng Ninh, Cầu Giấy, Hà Nội
                                            </span>
                                            :{" "}
                                            <a href="tel:024.6683.9292" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">024.6683.9292 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                    </ul>
                                    <ul id="location-2" className="tab-pane ">
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=11"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">
                                                161 Hàm Nghi, Q.Thanh Khê, TP.Đà Nẵng:
                                            </span>
                                            :{" "}
                                            <a href="tel:0799101799" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0799101799 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=16"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">233 Lê Duẩn, TP Vinh, Nghệ An</span>:{" "}
                                            <a href="tel:0989961233" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0989961233 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                    </ul>
                                    <ul id="location-3" className="tab-pane ">
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=22"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">
                                                290A Xô Viết Nghệ Tĩnh, Phường 25, Bình Thạnh, Tp HCM - Ngã Tư Hàng Xanh
                                            </span>
                                            :{" "}
                                            <a href="tel:0866790290" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0866790290 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=1"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">
                                                379 Hoàng Văn Thụ, P2, Q.Tân Bình, HCM
                                            </span>
                                            :{" "}
                                            <a href="tel:0984768260" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0984768260 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=2"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">
                                                42 Trần Quang Khải , Tân Định , Quận 1, HCM
                                            </span>
                                            :{" "}
                                            <a href="tel:0968371357" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0968371357 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=3"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">499 Nguyễn Thị Thập, Q.7, HCM</span>:{" "}
                                            <a href="tel:0964750268" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0964750268 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=4"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">
                                                466 Quang Trung, P.10, Q.Gò Vấp, HCM
                                            </span>
                                            :{" "}
                                            <a href="tel:0826392468" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0826392468 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=17"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">269B Hậu Giang, P5, Q.6, HCM</span>:{" "}
                                            <a href="tel:0976893579" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0976893579 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=18"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">535 Lê Hồng Phong, Q.10, HCM</span>:{" "}
                                            <a href="tel:0961662468" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0961662468 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=19"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">98 Võ Văn Ngân, TP.Thủ Đức, HCM</span>:{" "}
                                            <a href="tel:0379790229" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0379790229 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=20"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">
                                                TTBH 1: 377 Hoàng Văn Thụ, P.2, Q.Tân Bình, HCM
                                            </span>
                                            :{" "}
                                            <a href="tel:0905524580" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0905524580 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                        <li
                                            className="store-list__item"
                                            data-fancybox="showmap_footer"
                                            data-type="iframe"
                                            data-src="/ajaxs/showmap.aspx?id=21"
                                            data-preload="false"
                                            data-width={800}
                                            data-height={600}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <span className="store-list__name">
                                                TTBH 2: 98 Võ Văn Ngân, Tp.Thủ Đức, HCM
                                            </span>
                                            :{" "}
                                            <a href="tel:0973903973" title="Hotline" aria-label="Hotline">
                                                <b className="phone-number">0973903973 </b>
                                            </a>
                                            - <strong>Bản đồ đường đi</strong>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>© 2013 ~ 2024 - Công ty TNHH &amp; XNK ClickBuy. GPKD số 0106081880 do Sở KH &amp; ĐT Thành phố Hà Nội cấp ngày 10/01/2013</p>
                </div>
            </footer>
        </div>

    )
}
