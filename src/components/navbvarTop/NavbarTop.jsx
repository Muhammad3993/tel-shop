// React Hook
import { useState } from 'react'
// css
import './navbarTop.css'

// images
import img from '../../assets/images/navbarTopImg/flaguzb.svg'
import img1 from '../../assets/images/navbarTopImg/englishflag.webp'
import img2 from '../../assets/images/navbarTopImg/russianFlag.png'

// icon
import { AiOutlineHeart } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import { IoGitCompare } from 'react-icons/io5'
// react-router-dom
import { Link } from 'react-router-dom'

const NavbarTop = () => {

    const [navTopCountry, setNavTopCountry] = useState(false);
    const [navTopPages, setNavTopPages] = useState(false);
    const handleNavTopCountry = () => setNavTopCountry(!navTopCountry);
    const handleNavTopPages = () => setNavTopPages(!navTopPages);

    return (
        <div className='navbar_top'>
            <div className="container">
                <div className="navbar_top_main">
                    <div className="navbar_top_main_left">
                        <div className="navbar_top_main_left_boxes">
                            <div className='navbar_top_main_left_box_btn' onClick={handleNavTopCountry}>
                                <img src={img} alt="" />
                                <p>UZB / sum</p>
                                <p className='navbar_top_main_left_box_btn_i'><IoMdArrowDropdown /></p>
                            </div>
                            <div className={navTopCountry ? "navbar_top_main_left_box" : "navbar_top_main_left_box_none"}>
                                <div className='navbar_top_main_left_box_btn_black'>
                                    <img src={img1} alt="" />
                                    <p>ENG / eur</p>
                                </div>
                                <div className='navbar_top_main_left_box_btn_black'>
                                    <img src={img2} alt="" />
                                    <p>RUS / rub</p>
                                </div>
                            </div>
                        </div>
                        <p className='navbar_top_main_left_line'></p>
                        <p className='navbar_top_main_left_connect'>Aviable 24/7 at <a href="tel:+998999999999" className='navbar_top_main_left_connect_tel'>+998999999999</a></p>
                    </div>
                    <div className="navbar_top_main_right_boxes">
                        <div className="navbar_top_main_right_box" onClick={handleNavTopPages}>
                            <p>Wishlist / Compare / Track</p>
                            <p className='navbar_top_main_left_box_btn_i'><IoMdArrowDropdown /></p>
                        </div>
                        <div className={!navTopPages ? 'navbar_top_main_right' : 'navbar_top_main_right_flex'}>
                            <Link to='/' className='navbar_top_main_right_link'>
                                <p className='navbar_top_main_right_link_i'><AiOutlineHeart /></p>
                                <p className='navbar_top_main_right_link_text'>Wishlist[3]</p>
                            </Link>
                            <p className='navbar_top_main_left_line'></p>
                            <Link to='/' className='navbar_top_main_right_link'>
                                <p className='navbar_top_main_right_link_i'><IoGitCompare /></p>
                                <p className='navbar_top_main_right_link_text'>Compare[3]</p>
                            </Link>
                            <p className='navbar_top_main_left_line'></p>
                            <Link to='/' className='navbar_top_main_right_link'>
                                <p className='navbar_top_main_right_link_i'><MdLocationOn /></p>
                                <p className='navbar_top_main_right_link_text'>Order tracking</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarTop;
