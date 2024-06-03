// css
import './footer.css';
// icons
import {BsHeadset} from 'react-icons/bs'
import {MdPayment} from 'react-icons/md'
import {RxRocket} from 'react-icons/rx'
import {RiExchangeDollarLine} from 'react-icons/ri'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer_main">
                <div className="footer_main_nav">
                    <div className="footer_main_nav_div">
                        <p className='footer_main_nav_div_p'><RxRocket/></p>
                        <div>
                            <p className='footer_main_nav_div_p1'>Fast and free delivery</p>
                            <p className='footer_main_nav_div_p2'>Fast delivery for all orders over $200</p>
                        </div>
                    </div>
                    <div className="footer_main_nav_div">
                        <p className='footer_main_nav_div_p'><RiExchangeDollarLine/></p>
                        <div>
                            <p className='footer_main_nav_div_p1'>Money back guarantee</p>
                            <p className='footer_main_nav_div_p2'>We return money within 30 days</p>
                        </div>
                    </div>
                    <div className="footer_main_nav_div">
                        <p className='footer_main_nav_div_p'><BsHeadset/></p>
                        <div>
                            <p className='footer_main_nav_div_p1'>24/7 customer support</p>
                            <p className='footer_main_nav_div_p2'>Friendly 24/7 customer support</p>
                        </div>
                    </div>
                    <div className="footer_main_nav_div">
                        <p className='footer_main_nav_div_p'><MdPayment/></p>
                        <div>
                            <p className='footer_main_nav_div_p1'>Secure online payment</p>
                            <p className='footer_main_nav_div_p2'>We possess SSL / Secure certificate</p>
                        </div>
                    </div>
                </div>
                <hr className='footer_main_hr'/>
                <p className='footer_main_p'>© All rights reserved. Made by Muhammad</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;