import React from 'react'
import logo from '../../assets/logo.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-newsletter m-5">
                <div className="container-fluid d-flex">
                    <div className="text-white">
                        <img src={logo} alt=' ' className='brand-logo' />
                    </div>
                    <div className="col-md-9 text-end footer-info">
                        <div className="social-links mt-3">
                            <a href="/" className="twitter"><i className="fa fa-instagram"></i></a>
                            <a href="/" className="facebook"><i className="fa fa-facebook"></i></a>
                            <a href="/" className="instagram"><i className="fa fa-twitter"></i></a>
                            <a href="/" className="linkedin"><i className="fa fa-snapchat"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>UPBOX</h4>
                                <ul className='s-link navbar-navs'>
                                    <li><a href="/">Upbox Bag</a></li>
                                    <li><a href="/">Upbox Box Platinum</a></li>
                                    <li><a href="/">Upbox Box VIP</a></li>
                                    <li><a href="/">Deals</a></li>
                                    <li><a href="/">Seasonal Items</a></li>
                                    <li><a href="/">Upbox Promise</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Find Us On</h4>
                                <ul className='s-link navbar-navs'>
                                    <li><a href="/">Instagram</a></li>
                                    <li><a href="/">Facebook</a></li>
                                    <li><a href="/">TikTok</a></li>
                                    <li><a href="/">SnapChat</a></li>
                                    <li><a href="/">Twitter</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6  footer-links">
                                <h4>Product</h4>
                                <ul className='s-link navbar-navs'>
                                    <li><a href="/">Get the App</a></li>
                                    <li><a href="/">Loyalty Program</a></li>
                                    <li><a href="/">Affiliates</a></li>
                                    <li><a href="/">Press</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Help</h4>
                                <ul className='s-link navbar-navs'>
                                    <li><a href="/">Returns</a></li>
                                    <li><a href="/">FAQ</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">Community</a></li>
                                    <li><a href="/">Videos</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className="">
                                <p>© 2020 Quest AI. Upbox is a Sample Project and open source design project free for personal and commercial use.</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <ul className='d-flex footer'>
                                <li className='nav-item'><a href='/' >Terms</a></li>
                                <li className='nav-item'><a href='/' >Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer