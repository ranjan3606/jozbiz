import React from 'react'
import logo from '../../assets/logo.png'

function Navbar() {
    return (
        <div className='header-line'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container navigation">
                    <img src={logo} alt='' className='brand-logo' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-auto col-sm-12" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">This Month </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Skin </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Hair </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">Bath </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Sale</a>
                            </li>
                            <li className="nav-item">
                                <div className='login'>
                                    <a className="nav-link btn text-dark" aria-current="page" href="/">Log In <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar