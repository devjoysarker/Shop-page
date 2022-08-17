

import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./admin.css"

const AddTag = () => {

  const [tag,SetTag] = useState();

  // Slug Generate
  const makeSlug = (data) => {
    let arr = data.split(' ');
    return arr.join('-').toLowerCase(); 
  }

  const handleTagAdd = (e) =>{
    e.preventDefault();
    let slug = makeSlug(tag)
    axios.post('http://localhost:5050/tag', {
      id : '',
      name : tag,
      slug : slug 
    }).then(
      SetTag('')
    )
  }

  

  return (
    <>
      <h2>Add New Tag</h2>
    <hr />
    <Link  to={'/admin/tag'} className=" btn btn-info btn-sm">All Tag</Link>
    <hr />
     <Form onSubmit={ handleTagAdd }>
      <Form.Group className='allal'>
      <Form.Control type='text' value={ tag } onChange={ e => SetTag(e.target.value) } placeholder='Tag Name' />
      </Form.Group>
     <Form.Group mt={ 3 }>
     <Button variant='primary' className='btn btn-sm' type='submit'>Add</Button>
     </Form.Group>
     </Form>
    </>
  )
};

export default AddTag;