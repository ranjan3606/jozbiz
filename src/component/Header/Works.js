import React from 'react'
import pick from '../../assets/jabong/underline1.png'
import workside from '../../assets/jabong/maskgroup.png'
import art1 from '../../assets/jabong/art1.png'
import one from '../../assets/jabong/1.png'


function Works() {
    return (
        <div className='container works'>
            <div className='text-center sec'>
                <h1>How it works?</h1>
                <img src={pick} alt='' />
            </div>
            <div className='row work-row'>
                <div className='col-md-6 text-right'>
                    <div className='work-one'>
                        <img src={one} alt='' />
                    </div>
                    <img src={art1} alt='' className='art-img' />
                    <div className='work-img'>
                        <img src={workside} alt='' />
                    </div>
                </div>
                <div className='col-md-4 work-text'>
                    <div className='work-header'>
                        <h2>Setup your profile & <br /> preferences</h2>
                        <div className='text-left'>
                            <p>Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works