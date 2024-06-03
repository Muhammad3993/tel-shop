// react-router-dom
import { Link } from 'react-router-dom'
// css
import './trendingProducts.css'
// images
import img from '../../assets/images/tProductsImg/img.jpg'
// icons
import { AiFillStar, AiOutlineHeart, AiOutlineEye } from 'react-icons/ai'
import { BsCart3 } from 'react-icons/bs'


const TrendingProducts = () => {
    return (
        <div className='t_products'>
            <div className="container">
                <div className="t_products_main">
                    <div className="t_products_main_nav">
                        <p className='t_products_main_nav_title'>Trending products</p>
                        <Link to='/' className='t_products_main_nav_link'>More Products</Link>
                    </div>
                    <div className="t_products_main_products">

                        <div className="t_products_main_product">
                            <div className="t_products_main_product_img">
                                <img src={img} alt="" />
                                <div className='t_products_main_product_heart' title='Add to wishlist'>
                                    <AiOutlineHeart />
                                </div>
                            </div>
                            <div className="t_products_main_product_desc">
                                <p className='t_products_main_product_desc_p'>Smartphones</p>
                                <p className='t_products_main_product_desc_p1'>Popular Smartphone 128GB</p>
                                <div className='t_products_main_product_desc_div'>
                                    <p className='t_products_main_product_desc_div_p'>$965.<span>00</span></p>
                                    <div>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                    </div>
                                </div>
                                <button className='t_products_main_product_desc_btn'>
                                    <BsCart3 /> Add to Cart
                                </button>
                                <button className='t_products_main_product_desc_btn1'>
                                    <AiOutlineEye /> Quick view
                                </button>
                            </div>
                        </div>
                        <div className="t_products_main_product">
                            <div className="t_products_main_product_img">
                                <img src={img} alt="" />
                                <div className='t_products_main_product_heart' title='Add to wishlist'>
                                    <AiOutlineHeart />
                                </div>
                            </div>
                            <div className="t_products_main_product_desc">
                                <p className='t_products_main_product_desc_p'>Smartphones</p>
                                <p className='t_products_main_product_desc_p1'>Popular Smartphone 128GB</p>
                                <div className='t_products_main_product_desc_div'>
                                    <p className='t_products_main_product_desc_div_p'>$965.<span>00</span></p>
                                    <div>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                    </div>
                                </div>
                                <button className='t_products_main_product_desc_btn'>
                                    <BsCart3 /> Add to Cart
                                </button>
                                <button className='t_products_main_product_desc_btn1'>
                                    <AiOutlineEye /> Quick view
                                </button>
                            </div>
                        </div>
                        <div className="t_products_main_product">
                            <div className="t_products_main_product_img">
                                <img src={img} alt="" />
                                <div className='t_products_main_product_heart' title='Add to wishlist'>
                                    <AiOutlineHeart />
                                </div>
                            </div>
                            <div className="t_products_main_product_desc">
                                <p className='t_products_main_product_desc_p'>Smartphones</p>
                                <p className='t_products_main_product_desc_p1'>Popular Smartphone 128GB</p>
                                <div className='t_products_main_product_desc_div'>
                                    <p className='t_products_main_product_desc_div_p'>$965.<span>00</span></p>
                                    <div>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                    </div>
                                </div>
                                <button className='t_products_main_product_desc_btn'>
                                    <BsCart3 /> Add to Cart
                                </button>
                                <button className='t_products_main_product_desc_btn1'>
                                    <AiOutlineEye /> Quick view
                                </button>
                            </div>
                        </div>
                        <div className="t_products_main_product">
                            <div className="t_products_main_product_img">
                                <img src={img} alt="" />
                                <div className='t_products_main_product_heart' title='Add to wishlist'>
                                    <AiOutlineHeart />
                                </div>
                            </div>
                            <div className="t_products_main_product_desc">
                                <p className='t_products_main_product_desc_p'>Smartphones</p>
                                <p className='t_products_main_product_desc_p1'>Popular Smartphone 128GB</p>
                                <div className='t_products_main_product_desc_div'>
                                    <p className='t_products_main_product_desc_div_p'>$965.<span>00</span></p>
                                    <div>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                    </div>
                                </div>
                                <button className='t_products_main_product_desc_btn'>
                                    <BsCart3 /> Add to Cart
                                </button>
                                <button className='t_products_main_product_desc_btn1'>
                                    <AiOutlineEye /> Quick view
                                </button>
                            </div>
                        </div>
                        <div className="t_products_main_product">
                            <div className="t_products_main_product_img">
                                <img src={img} alt="" />
                                <div className='t_products_main_product_heart' title='Add to wishlist'>
                                    <AiOutlineHeart />
                                </div>
                            </div>
                            <div className="t_products_main_product_desc">
                                <p className='t_products_main_product_desc_p'>Smartphones</p>
                                <p className='t_products_main_product_desc_p1'>Popular Smartphone 128GB</p>
                                <div className='t_products_main_product_desc_div'>
                                    <p className='t_products_main_product_desc_div_p'>$965.<span>00</span></p>
                                    <div>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                    </div>
                                </div>
                                <button className='t_products_main_product_desc_btn'>
                                    <BsCart3 /> Add to Cart
                                </button>
                                <button className='t_products_main_product_desc_btn1'>
                                    <AiOutlineEye /> Quick view
                                </button>
                            </div>
                        </div>
                        <div className="t_products_main_product">
                            <div className="t_products_main_product_img">
                                <img src={img} alt="" />
                                <div className='t_products_main_product_heart' title='Add to wishlist'>
                                    <AiOutlineHeart />
                                </div>
                            </div>
                            <div className="t_products_main_product_desc">
                                <p className='t_products_main_product_desc_p'>Smartphones</p>
                                <p className='t_products_main_product_desc_p1'>Popular Smartphone 128GB</p>
                                <div className='t_products_main_product_desc_div'>
                                    <p className='t_products_main_product_desc_div_p'>$965.<span>00</span></p>
                                    <div>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                    </div>
                                </div>
                                <button className='t_products_main_product_desc_btn'>
                                    <BsCart3 /> Add to Cart
                                </button>
                                <button className='t_products_main_product_desc_btn1'>
                                    <AiOutlineEye /> Quick view
                                </button>
                            </div>
                        </div>
                        <div className="t_products_main_product">
                            <div className="t_products_main_product_img">
                                <img src={img} alt="" />
                                <div className='t_products_main_product_heart' title='Add to wishlist'>
                                    <AiOutlineHeart />
                                </div>
                            </div>
                            <div className="t_products_main_product_desc">
                                <p className='t_products_main_product_desc_p'>Smartphones</p>
                                <p className='t_products_main_product_desc_p1'>Popular Smartphone 128GB</p>
                                <div className='t_products_main_product_desc_div'>
                                    <p className='t_products_main_product_desc_div_p'>$965.<span>00</span></p>
                                    <div>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                    </div>
                                </div>
                                <button className='t_products_main_product_desc_btn'>
                                    <BsCart3 /> Add to Cart
                                </button>
                                <button className='t_products_main_product_desc_btn1'>
                                    <AiOutlineEye /> Quick view
                                </button>
                            </div>
                        </div>
                        <div className="t_products_main_product">
                            <div className="t_products_main_product_img">
                                <img src={img} alt="" />
                                <div className='t_products_main_product_heart' title='Add to wishlist'>
                                    <AiOutlineHeart />
                                </div>
                            </div>
                            <div className="t_products_main_product_desc">
                                <p className='t_products_main_product_desc_p'>Smartphones</p>
                                <p className='t_products_main_product_desc_p1'>Popular Smartphone 128GB</p>
                                <div className='t_products_main_product_desc_div'>
                                    <p className='t_products_main_product_desc_div_p'>$965.<span>00</span></p>
                                    <div>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                    </div>
                                </div>
                                <button className='t_products_main_product_desc_btn'>
                                    <BsCart3 /> Add to Cart
                                </button>
                                <button className='t_products_main_product_desc_btn1'>
                                    <AiOutlineEye /> Quick view
                                </button>
                            </div>
                        </div>
                        
                        


                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingProducts