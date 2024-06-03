// use
import { useState } from 'react'
// css
import './discount.css'
// img
import img from '../../assets/images/discount_img/img.jpg'
import { useEffect } from 'react'

const Discount = () => {

    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    let interval;

    const countDown = () => {

        const destionation = new Date('Nov 10,  2023').getTime()
        interval = setInterval(() => {
            const now = new Date().getTime()
            const different = destionation - now
            const days = Math.floor(different / (1000 * 60 * 60 * 24))
            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor(different % (1000 * 60) / 1000)

            if (destionation < 0) clearInterval(interval.current)
            else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        })
    }

    useEffect(() => {
        countDown()
    })

    return (
        <div className='discount'>
            <div className="container">
                <div className="discount_main">
                    <div className="discount_main_desc">
                        <p className='discount_main_desc_limited'>Limited Offer</p>
                        <p className='discount_main_desc_p'>All new</p>
                        <p className='discount_main_desc_p1'>Last Gen iPad Pro <br /> <span className='discount_main_desc_p1_span'>at discounted price. Hurry up!</span></p>
                        <div className='discount_main_desc_clocks'>
                            <div className="discount_main_desc_clock">
                                <p>{days}</p>
                                <p className='discount_main_desc_clock_p'>d</p>
                            </div> 
                            |
                            <div className="discount_main_desc_clock">
                                <p>{hours}</p>
                                <p className='discount_main_desc_clock_p'>h</p>
                            </div>
                            |
                            <div className="discount_main_desc_clock">
                                <p>{minutes}</p>
                                <p className='discount_main_desc_clock_p'>m</p>
                            </div>
                            |
                            <div className="discount_main_desc_clock">
                                <p>{seconds}</p>
                                <p className='discount_main_desc_clock_p'>s</p>
                            </div>
                        </div>
                    </div>
                    <div className="discount_main_img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discount;