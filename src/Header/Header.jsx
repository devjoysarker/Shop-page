
import React from 'react';
import Logo  from '../_assets/images/logo_light.png';
import LogoDrak from '../_assets/images/logo_dark.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <>
     <header className='shadow-sm bg-dark' id="topnav">
            <div className="container">
                <div className="logo">
                <a href="index-2.html">
                    <img src={ Logo } alt="" className="logo-light" />
                    <img src={ LogoDrak } alt="" className="logo-dark" />
                </a>
                </div>
                <div className="menu-extras">
                <div className="menu-item">
                    <div className="cart">
                    <a href="https://">
                        <i className="ti-bag"></i><span className="cart-number">2</span>
                    </a>
                    <div className="shopping-cart">
                        <div className="shopping-cart-info">
                        <div className="row">
                            <div className="col-xs-6">
                            <h6 className="upper">Your Cart</h6>
                            </div>
                            <div className="col-xs-6 text-right">
                            <h6 className="upper">$399.99</h6>
                            </div>
                        </div>
                        </div>
                        <ul className="nav product-list">
                        <li>
                            <div className="product-thumbnail">
                            <img src="images/shop/2.jpg" alt="" />
                            </div>
                            <div className="product-summary">
                            <a href="https://">Premium Suit Blazer</a><span>$199.99</span>
                            </div>
                        </li>
                        <li>
                            <div className="product-thumbnail">
                            <img src="images/shop/5.jpg" alt="" />
                            </div>
                            <div className="product-summary">
                            <a href="https://">Reiss Vara Tailored Blazer</a><span>$199.99</span>
                            </div>
                        </li>
                        </ul>
                        <p><a href="https://" className="btn btn-color btn-block btn-sm">Checkout</a>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="search">
                    <a href="https://">
                        <i className="ti-search"></i>
                    </a>
                    <div className="search-form">
                        <form action="https://" className="inline-form">
                        <div className="input-group">
                            <input type="text" placeholder="Search" className="form-control" />
                                <span className="input-group-btn"><button type="button" className="btn btn-color"><span>
                                    <i className="ti-search"></i></span>
                            </button>
                            </span>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                <div className="menu-item">
                    <a href="https://" className="navbar-toggle">
                    <div className="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </a>
                </div>
                </div>
                <div id="navigation">
                <ul className="navigation-menu">
                    <li>
                    <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                    <Link to={'/shop'}>Shop</Link>
                    </li>
                    <li>
                    <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                    <a href="https://">Blog</a>
                    </li>
                    <li>
                    <a href="https://">Contact us</a>
                    </li>
                    <li>
                    <a href="https://">About us</a>
                    </li>
                </ul>
                </div>
            </div>
    </header>
    <section class="page-title parallax">
        <div data-parallax="scroll" data-image-src="images/bg/19.jpg" class="parallax-bg"></div>
        <div class="parallax-overlay">
            <div class="centrize">
            <div class="v-center">
                <div class="container">
                <div class="title center">
                    <h1 class="upper">Shop</h1>
                    <h4>Free Delivery Worldwide.</h4>
                    <hr />
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  </>
  )
};

export default Header;