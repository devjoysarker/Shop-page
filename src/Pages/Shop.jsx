
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Sidebar from '../partials/Sidebar';
import { Link } from 'react-router-dom';

const Shop = ( { products,Setproducts,cats,tags } ) => {
  return (
    <div>
      {/* <section class="page-title parallax">
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
    </section> */}
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-3 hidden-sm hidden-xs">
            <Sidebar Setproducts={ Setproducts } cats={ cats } tags={ tags } />
          </div>
          <div class="col-md-9">
            <div class="shop-menu">
              <div class="row">
                <div class="col-sm-8">
                  <h6 class="upper">Displaying 6 of 18 results</h6>
                </div>
                <div class="col-sm-4">
                  <div class="form-select">
                    <select name="type" class="form-control">
                      <option selected="selected" value="">Sort By</option>
                      <option value="">What's new</option>
                      <option value="">Price high to low</option>
                      <option value="">Price low to high</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid">
              <div class="row"> 
              {
                  products.map(data => 
                    <div class="col-md-4 col-sm-6">
                      <div class="shop-product">
                        <div class="product-thumb">
                          <Link to={`/shop/${ data.slug }`}>
                            <img style={{ height:'200px',objectFit:'cover',width:'250px' }} src={ data.photo } alt="" />
                          </Link>
                          <div class="product-overlay"><a href="https://" class="btn btn-color-out btn-sm">Add To Cart<i class="ti-bag"></i></a>
                          </div>
                        </div>
                        <div class="product-info">
                          <h4 class="upper"><a href="https://">{ data.name }</a></h4>
                          {
                            data.sale_price ? 
                            <><span style={{ textDecoration : 'line-through' }}>{ data.regular_price} BDT  </span>
                            <span style={{ color:'red', }}>{ data.sale_price } BDT</span></>
                            : <span style={{ color:'red', }}>{ data.regular_price } BDT  </span>
                          }
                          
                          <div class="save-product"><a href="https://"><i class="icon-heart"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }


              </div>
              <ul class="pagination">
                <li><a href="https://" aria-label="Previous"><span aria-hidden="true"><i class="ti-arrow-left"></i></span></a>
                </li>
                <li class="active"><a href="https://">1</a>
                </li>
                <li><a href="https://">2</a>
                </li>
                <li><a href="https://">3</a>
                </li>
                <li><a href="https://">4</a>
                </li>
                <li><a href="https://">5</a>
                </li>
                <li><a href="https://" aria-label="Next"><span aria-hidden="true"><i class="ti-arrow-right"></i></span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Shop;