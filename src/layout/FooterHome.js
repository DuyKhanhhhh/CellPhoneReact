import React from 'react'

export default function FooterHome() {
    return (
        <div>
            <footer className='footer'>
                <div className='container'>
                    <div className='footer-top flex fs-13'>
                        <div className='footer-top__item'>
                            <div className='h4 footer-top__title'>
                                <b>Chính sách bán hàng </b>
                            </div>
                            <ul>
                                <li>Chính sách bảo hành</li>
                                <li>Chính sách mua hàng Online</li>
                                <li>Chính sách bảo mật thông tin khách hàng</li>
                            </ul>
                        </div>
                        <div className='footer-top-store footer-top__item'>
                            <div className='h4 footer-top__title'>
                                <b>Tổng đài hỗ trợ</b>
                                <span className='font400'>(Từ 8:00-21:00)</span>
                            </div>
                            <div className='footer-top__text'>
                                <span>Hotline bán hàng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}
