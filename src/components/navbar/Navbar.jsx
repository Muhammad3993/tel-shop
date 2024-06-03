// React Hooks
import { useState } from 'react'
// react-router-dom
import { Link } from 'react-router-dom'
// css
import './navbar.css'
// icon
import { AiOutlineUser } from 'react-icons/ai'
import { BsCart3 } from 'react-icons/bs'
import { ImSearch } from 'react-icons/im'
import { IoMdArrowDropdown } from 'react-icons/io'

const Navbar = () => {
  const [navSearch, setNavSearch] = useState(false);
  const handleNavSearch = () => setNavSearch(!navSearch);
  return (
    <div className='navbar'>
      <div className="container">
        <div className="navbar_main">
          <Link to="/" className='navbar_main_logo'>LOGO</Link>
          <div className='navbar_main_div'>
            <div className='navbar_main_input'>
              <p className='navbar_main_input_i'><ImSearch /></p>
              <input type="text" placeholder='Search for products' />
              <select name="" id="">
                <option value="">All Categories</option>
                <option value="">Computers</option>
                <option value="">Smartphones</option>
                <option value="">TV, Video, Audio</option>
                <option value="">Cameras</option>
                <option value="">Headphones</option>
                <option value="">Wearables</option>
                <option value="">Printers</option>
                <option value="">Video Games</option>
                <option value="">Home Music</option>
                <option value="">Data Storage</option>
              </select>
            </div>
          </div>

          <div className='navbar_main_input_none' onClick={handleNavSearch}>
            <p><ImSearch /></p>
          </div>
          <div className="navbar_main_page">
            <Link className='navbar_main_page_link'>
              <p className='navbar_main_page_link_i'><AiOutlineUser /></p>
              <div>
                <p className='navbar_main_page_link_sign'>Hello, Sign in</p>
                <p className='navbar_main_page_link_account'>My Account</p>
              </div>
            </Link>
            <Link className='navbar_main_page_link'>
              <p className='navbar_main_page_link_i1'><BsCart3 /> <b>2</b></p>
              <div>
                <p className='navbar_main_page_link_sign'>My Cart</p>
                <p className='navbar_main_page_link_account'>$1,247.00 <IoMdArrowDropdown /></p>
              </div>
            </Link>
          </div>
        </div>
        <div className='navbar_main_div'>
          <div className={!navSearch ? 'navbar_main_input none flex': 'navbar_main_input none'}>
            <input type="text" placeholder='Search for products' />
            <select name="" id="">
              <option value="">All Categories</option>
              <option value="">Computers</option>
              <option value="">Smartphones</option>
              <option value="">TV, Video, Audio</option>
              <option value="">Cameras</option>
              <option value="">Headphones</option>
              <option value="">Wearables</option>
              <option value="">Printers</option>
              <option value="">Video Games</option>
              <option value="">Home Music</option>
              <option value="">Data Storage</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar