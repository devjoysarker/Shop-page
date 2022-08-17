import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './_assets/css/bundle.css'       
import './_assets/css/style.css'       
import ProductSingle from './Pages/ProductSingle';
import Shop from './Pages/Shop';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashbarod from './Admin/Dashbarod';
import Catagory from './Admin/Catagory';
import Products from './Admin/Products';
import Tag from './Admin/Tag';
import Dash from './Admin/Dash';
import AddTag from './Admin/AddTag';
import ProductAdd from './Admin/ProductAdd';
import axios from 'axios';


function App() {
  
  // make slug
  const makeSlug = (data) => {
    let arr = data.split(' ');
    return arr.join('-').toLowerCase();
    }

// catagores state
const [cats,SetCats] = useState([]);
//tag state
const [tags,SetTags] = useState([]);
//products state
const [products,Setproducts] = useState([]);

// tats useffect
useEffect(() =>{
  axios.get('http://localhost:5050/tag').then( res => {
    SetTags(res.data.reverse())});
},[]);
// cats usseffect
useEffect(() =>{
  axios.get('http://localhost:5050/catagory').then(res =>{
    SetCats(res.data)});
},[]);
// products useffect
useEffect(() =>{
  axios.get('http://localhost:5050/products').then(res =>{
    Setproducts(res.data)});
},[]);

  return (
    <>
    <Header />
    <Routes>
    <Route path='/' element={ <Home /> } />
    <Route path='/shop' element={ <Shop  products={products} Setproducts={Setproducts} cats={cats} tags={ tags } /> } />
    <Route path='/shop/:slug' element={ <ProductSingle /> } />
    <Route path='/admin' element={ <Dashbarod /> } >
      <Route path='/admin/dashborad' element={ <Dash /> } />
      <Route path='/admin/catagory' element={ <Catagory cats={cats} makeSlug={ makeSlug } /> } />
      <Route path='/admin/products' element={ <Products products={products}  makeSlug={ makeSlug } /> } />
      <Route path='/admin/productAdd' element={ <ProductAdd cats={cats} tags={tags} makeSlug={ makeSlug } /> } />
      <Route path='/admin/tag' element={ <Tag tags={tags} makeSlug={ makeSlug } /> } />
      <Route path='/admin/add-tag' element={ <AddTag /> } />
    </Route>
    </Routes>
    <Footer /> 
    </>

  );
}

export default App;
