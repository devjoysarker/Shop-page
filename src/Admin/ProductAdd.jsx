
import axios from 'axios';
import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ProductAdd = ( { tags,cats } ) => {

  // Add products state
  const [inputs,SetInputs] = useState({
    name : '',
    regular_price : '',
    sale_price : '',
    shot_ds : '',
    rating : '',
    catagoryId : '',
    tagId : '',
    photo : ''
  });

  const handleProductAddSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5050/products',inputs).then(
      SetInputs({
        name : '',
        regular_price : '',
        sale_price : '',
        shot_ds : '',
        rating : '',
        catagoryId : '',
        tagId : '',
        photo : ''
      })
    )
  }



  return (
    <>
        <h2>Add New Products</h2>
        <hr />
        <Link to='/admin/products' className='btn btn-sm btn-primary' >All Products</Link>
        <hr />

        <Form onSubmit={ handleProductAddSubmit } >
            <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control type='text' value={ inputs.name } onChange={ e => SetInputs({...inputs, name: e.target.value }) }  />
            </Form.Group>
            <Form.Group>
                <Form.Label>Regular Price</Form.Label>
                <Form.Control type='text' value={ inputs.regular_price } onChange={ e => SetInputs({...inputs, regular_price: e.target.value }) } />
            </Form.Group>
            <Form.Group>
                <Form.Label>Sale Price</Form.Label>
                <Form.Control type='text' value={ inputs.sale_price } onChange={ e => SetInputs({...inputs, sale_price: e.target.value }) } />
            </Form.Group>
            <Form.Group>
                <Form.Label>Short Disc</Form.Label>
                <textarea className='form-control' value={ inputs.shot_ds } onChange={ e => SetInputs({...inputs, shot_ds: e.target.value }) } ></textarea>
            </Form.Group>
            <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Control type='text' value={ inputs.rating } onChange={ e => SetInputs({...inputs, rating: e.target.value }) } />
            </Form.Group>
            <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.Control type='text' value={ inputs.photo } onChange={ e => SetInputs({...inputs, photo: e.target.value }) } />
            </Form.Group>
            <Form.Group>
                <Form.Label>Catagories</Form.Label>
                <select className='form-control' value={ inputs.catagoryId } onChange={ e => SetInputs({...inputs, catagoryId: e.target.value }) }>
                  <option value="">Select</option>
                  {
                    cats.map(data => 
                      <option value={ data.id }>{ data.name }</option>
                      )
                  }
                  
                </select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Tags</Form.Label>
                <select className='form-control' value={ inputs.tagId } onChange={ e => SetInputs({...inputs, tagId: e.target.value }) } >
                  <option value="">Select</option>
                  {
                    tags.map(data => 
                      <option value={ data.id }>{ data.name }</option>
                      )
                  }
                  
                </select>
            </Form.Group>
            <Form.Group>
              <Button type='submit' className='btn btn-primary btn-sm'>Publish</Button>
            </Form.Group>
        </Form>

    </>
  )
};


export default ProductAdd;