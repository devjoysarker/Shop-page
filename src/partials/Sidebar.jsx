

import React, { useEffect, useState } from 'react';
import Product from '../_assets/images/shop/1.jpg'
import axios from 'axios';

const Sidebar = ({ Setproducts,cats,tags }) => {

    const [search,SetSearch] = useState('');

    // Product searche by catagories
    const  handleCatSearce = (e,id) => {
        e.preventDefault();
        SetSearch('');
        axios.get(`http://localhost:5050/catagory/${ id }/products`).then(res => {
         Setproducts(res.data)
        });
    }

    // Product search by tag
    const handleTagSearch = (e,id) => {
        e.preventDefault();
        SetSearch('');
        axios.get(`http://localhost:5050/tag/${ id }/products`).then(res => {
         Setproducts(res.data)
        });
    }

    useEffect( () => {
        if (search !== '') {
            axios.get(`http://localhost:5050/products?q=${ search }`).then(res => {
                Setproducts(res.data) 
             },[]);  
        }

    } )

  return (
    <>
        <div class="sidebar">
        <div class="widget">
        <h6 class="upper">Search Shop</h6>
        <form>
            <input type="text" placeholder="Search.." value={search} onChange={e => SetSearch(e.target.value)} class="form-control" />
        </form>
        </div>
        <div class="widget">
        <h6 class="upper">Categories</h6>
        <ul class="nav d-block">
            {
                cats.map(data => 
                <li>
                <a onClick={ (e) => handleCatSearce( e,data.id ) } href="http" >{ data.name }</a>
                </li> 
                )
            }
        </ul>
        </div>

        <div class="widget">
        <h6 class="upper">Popular Tags</h6>
        <div class="tags clearfix">
            {
                tags.map(data => 
                    <a onClick={ (e) => handleTagSearch(e,data.id) } href="http">{data.name}</a>
                )
            }         
        </div>
        </div>

        <div class="widget">
        <h6 class="upper">Trending Products</h6>
        <ul class="nav product-list">
            <li>
            <div class="product-thumbnail">
                <img src={Product} alt="" />
            </div>
            <div class="product-summary"><a href="https://">Premium Suit Blazer</a><span>$199.99</span>
            </div>
            </li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Sidebar;