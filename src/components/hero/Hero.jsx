// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";
// css
import './hero.css'
// react-router-dom
import { Link } from "react-router-dom";
// images
import img from '../../assets/images/heroImg/img.jpg'

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero_main">
                    <Swiper
                        pagination={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper hero_main_swiper"
                    >
                        <SwiperSlide>
                            <div className="hero_main_swipe">
                                <div className="hero_main_swipe_desc">
                                    <p className="hero_main_swipe_desc_p">World of music with</p>
                                    <p className="hero_main_swipe_desc_p1">Headphones</p>
                                    <p className="hero_main_swipe_desc_p2">Choose between top brands</p>
                                    <Link to='/' className="hero_main_swipe_desc_link">Shop Now</Link>
                                </div>
                                <div className="hero_main_swipe_img">
                                    <img src={img} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hero_main_swipe">
                                <div className="hero_main_swipe_desc">
                                    <p className="hero_main_swipe_desc_p">World of music with</p>
                                    <p className="hero_main_swipe_desc_p1">Headphones</p>
                                    <p className="hero_main_swipe_desc_p2">Choose between top brands</p>
                                    <Link to='/' className="hero_main_swipe_desc_link">Shop Now</Link>
                                </div>
                                <div className="hero_main_swipe_img">
                                    <img src={img} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hero_main_swipe">
                                <div className="hero_main_swipe_desc">
                                    <p className="hero_main_swipe_desc_p">World of music with</p>
                                    <p className="hero_main_swipe_desc_p1">Headphones</p>
                                    <p className="hero_main_swipe_desc_p2">Choose between top brands</p>
                                    <Link to='/' className="hero_main_swipe_desc_link">Shop Now</Link>
                                </div>
                                <div className="hero_main_swipe_img">
                                    <img src={img} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Hero