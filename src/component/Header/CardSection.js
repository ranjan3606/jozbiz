import React from 'react'
import imgone from '../../assets/jabong/img1.png'
import imgtwo from '../../assets/jabong/img2.png'
import imgthree from '../../assets/jabong/img3.png'
import imgfour from '../../assets/jabong/img4.png'

function CardSection() {
    return (
        <div className='container-fluid cardSection'>
            <div className='cardWrapper'>
                <div className='text-center sec'>
                    <h2>Social Post</h2>
                </div>
                <main class="grid text-center">
                    <article>
                        <div class="text">
                            <img src={imgone} alt='' />
                        </div>
                        <div className='mt-2'>
                            <p>How to rock the lip look<br /> that turns heads</p>
                        </div>
                    </article>

                    <article>
                        <div class="text">
                            <img src={imgtwo} alt='' />
                        </div>
                        <div className='mt-2'>
                            <p>Find the perfect shade<br /> for the season</p>
                        </div>
                    </article>
                    <article>
                        <div class="text">
                            <img src={imgthree} alt='' />
                        </div>
                        <div className='mt-2'>
                            <p>The 5 eye shadow<br /> secrets you never knew</p>
                        </div>
                    </article>
                    <article>
                        <div class="text">
                            <img src={imgfour} alt='' />
                        </div>
                        <div className='mt-2'>
                            <p>The pro-tips for at home<br /> hair dying</p>
                        </div>
                    </article>

                </main>
                </div>
            </div>
            )
}

            export default CardSection