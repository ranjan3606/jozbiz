import React from 'react'
import pick from '../../assets/jabong/underline.png'

function Section() {
  return (
    <div className='container mt-5 sec'>
      <div className='text-center sec'>
        <h1>Pick your plan</h1>
        <img src={pick} alt='' />
      </div>
      <div className="row mt-5">
        <div className="col-sm-5 text-center">
          <div className="card-body card-month-background">
            <h1 className="card-title">Monthly</h1>
            <h3 className="card-text mt-4">$ 18 / mo</h3>
            <a href="/" className="btn btn-box">Find your box</a>
          </div>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-5 text-center">
          <div className="card-body card-year-background">
            <h1 className="card-title">Monthly</h1>
            <h3 className="card-text mt-4">$ 18 / mo</h3>
            <a href="/" className="btn  btn-box">Find your box</a>
          </div>
        </div>
      </div>
      <div className='text-center mt-5'>
        <p>Your plan auto-renews at the end of 30 days from the 1st day you signed-up.</p>
      </div>
    </div>
  )
}

export default Section