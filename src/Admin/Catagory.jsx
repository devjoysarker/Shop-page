
import React, { useState } from 'react';
import {Table,Button, Form} from 'react-bootstrap';
import axios from 'axios';


const Catagory = ({ cats,makeSlug }) => {



  //Form State
  const [catform,SetCatform] = useState(false);   
  const [editform,SetEditform] = useState(false);  

  // Cat Add State
  const [cat,SetCat] = useState({
    id   : '',
    name : ''

  })
  // handle Add form
  const handleAddForm  =()=>{
    SetCatform(true);
    SetEditform(false);
    SetCat({
      name : '',
      id : ''
    });
  }

  const handleFormSubmit = (e) => {
   e.preventDefault();
   let slug = makeSlug(cat.name);

   axios.post('http://localhost:5050/catagory/',{
    id : '',
    name : cat.name,
    slug : slug

   }).then(res => {
    SetCatform(false)
    SetCat({
      name : '', 
      id : ''
    })
   })

  }
// Handle Edit From
const handleEditForm = ( id ) => {
  SetCatform(false);
  SetEditform(true);
  axios.get('http://localhost:5050/catagory/' + id).then(res => {
    SetCat({
      name : res.data.name,
      id :  res.data.id
    })
  })

}
// Update Catagory
const handleCatUpdate = (e) => {
  e.preventDefault();
  let slug = makeSlug(cat.name);
  axios.patch('http://localhost:5050/catagory/' + cat.id , {
    name : cat.name,
    slug : slug
  }).then( res => {
    SetCat({
      name : '',
      id   : ''
    });
    SetEditform(false);
  })
}

  return (
    <>
    <h2>Catagory</h2>
    <hr />
    <Button variant="success" onClick={ handleAddForm } className="btn-sm">Add New Catagory</Button>
    <hr />
   
    <Table>
      <thead>
        <th>#</th>
        <th>Name</th>
        <th>Slug</th>
        <th>Action</th>
      </thead>
      <tbody>
      {
        cats.map((data,index) => 
        <tr>
        <td>{ index + 1 }</td>
        <td>{ data.name }</td>
        <td>{ data.slug }</td>
        <td>
          <Button variant="warning" onClick={ () =>  handleEditForm(data.id) } className="btn-sm">Edit</Button>
          <Button variant="danger" className="btn-sm">Delete</Button>
        </td>
        </tr>
        )
      }
  </tbody>

    </Table>
    {
      catform &&
      <>
      <h3>Add New Catagory</h3>
      <Form  onSubmit={ handleFormSubmit } >
      <Form.Group className='allal'>
      <Form.Control type='text'  value={ cat.name } onChange={ e => SetCat({...cat,name:e.target.value }) }  placeholder='Catagory Name' />
      </Form.Group> 
     <Form.Group mt={ 3 }>
      <Button variant='primary' className='btn btn-sm' type='submit'>Add</Button>
      </Form.Group>
     </Form> 
      <hr />
      </>
    }


{
      editform &&
      <>
      <hr />
      <h3>Edit Catagory</h3>
      <Form  onSubmit={ handleCatUpdate } >
      <Form.Group className='allal'>
      <Form.Control type='text'  value={ cat.name } onChange={ e => SetCat({...cat,name:e.target.value }) }  placeholder='Catagory Name' />
      </Form.Group> 
     <Form.Group mt={ 3 }>
      <Button variant='primary' className='btn btn-sm' type='submit'>Add</Button>
      </Form.Group>
     </Form> 
      <hr />
      </>
    }
 
 
    </>
  )
};

export default Catagory;