import React from 'react'
import boxback from '../../assets/jabong/tweezer1.png'
import pensil from '../../assets/jabong/marker.png'


function Header() {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="row">
                    <div className=" col-md-4 col-sm-8 data">
                        <h1>Look good without leaving your house.</h1>
                        <p>Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.</p>
                        <button type="button" className="btn btn-large signup">Sign Up</button>
                    </div>
                    <div className="col-md-6 col-sm-6 img-div">
                        <div className='pensil'>
                            <img src={pensil} alt='' className='line' />
                        </div>
                        <img src={boxback} className="box-image" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header