import React from 'react'
import workside from '../../assets/jabong/vector2.png'
import two from '../../assets/jabong/2.png'
import three from '../../assets/jabong/3.png'
import box2 from '../../assets/jabong/box2.png'
import art from '../../assets/jabong/art2.png'
import worksides from '../../assets/jabong/mask.png'
import art1 from '../../assets/jabong/art3.png'



function WorkGroup() {
    return (
        <>
            <div className='container workGroup'>
                <div className='row workGroup-row text-right'>
                    <div className='col-md-6 '></div>
                    <div className='col-md-4 workGroup-text'>
                        <div className='workGroup-img'>
                            <img src={workside} alt='' />
                        </div>
                        <div className='workGroup-one'>
                            <img src={box2} alt='' />
                        </div>
                        <div className='artboxcolomn'>
                            <img src={art} alt='' className='art-img1' />

                        </div>
                        <img src={two} alt='' />
                        <div className='workGroup-header '>
                            <h2 className='sec'>Review your <br /> custom box</h2>
                            <div className='text-left'>
                                <p>Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container headerGroups'>
                <div className='row wrapper'>
                    <div className='col-md-6 text-right'>
                        <div className='three-work'>
                            <img src={three} alt='' />
                        </div>
                        <div className='works-img'>
                            <img src={worksides} alt='' />
                        </div>
                        <img src={art1} alt='' className='artImg' />
                    </div>
                    <div className='col-md-4 headerText'>
                        <div className='workHeader'>
                            <h2 className='sec'>Try it on at home</h2>
                            <div className='text-left'>
                                <p>Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-5'>
                <button className='btn btn-boxs'>TRY IT FOR YOURSELF</button>
                </div>
            </div>

        </>

    )
}

export default WorkGroup