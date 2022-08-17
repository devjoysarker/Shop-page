import axios from 'axios';
import React, {  useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tag = ({ tags,makeSlug }) => {


  //Edit tag state
  const [tag,SetTag] = useState({
    name : '',
    id   : ''
  });

  // Update tag edit
  const [tagEditForm,SetTagEditForm] = useState(false);

  //Tag Delete handeler
  const handleTagDelete = (id) =>{
  axios.delete('http://localhost:5050/tag/' + id);
  }



  // handle Edit tag

  const handletagEdit = (id) =>{
    SetTagEditForm(true)
    axios.get('http://localhost:5050/tag/' + id).then( res => {
      SetTag({
        ...tag,
        name : res.data.name,
        id : res.data.id
      })
    } )
  }
    //Form Submit Handler

    const handleFormSubmit = (e) => {
      e.preventDefault();

      let slug = makeSlug(tag.name)

      axios.patch('http://localhost:5050/tag/' + tag.id, {
        name : tag.name,
        slug : slug
      }).then(res => {
        SetTagEditForm(false)
      })
  
    }

  

  return (
    <>
    <h2>Tag</h2>
    <hr />
    <Link className=" btn btn-primary btn-sm" to={'/admin/add-tag'}>Add New Tag</Link>
    <hr />
    <Table striped>
      <thead>
        <th>#</th>
        <th>Name</th>
        <th>Slug</th>
        <th>Action</th>
      </thead>
   {
    tags.map( (data,index) =>
    <tbody>
    <td>{ index + 1 }</td>
    <td>{ data.name }</td>
    <td>{ data.slug }</td>
    <td> 
      <Button variant="warning" onClick={ () => handletagEdit(data.id)} className="btn-sm">Edit</Button>
      <Button variant="danger" onClick={ () => handleTagDelete(data.id) } className="btn-sm">Delete</Button>
    </td>
   </tbody> 
    )
   }
    </Table>

{
  tagEditForm && 
  <>
      <h3>Edit Tag Data</h3>
    <Form onSubmit={ handleFormSubmit } >
      <hr />
      <Form.Group className='allal'>
      <Form.Control type='text' value={ tag.name } onChange={ e => SetTag({...tag, name: e.target.value }) } placeholder='Tag Name' />
      </Form.Group> 
      <Form.Group className='allal'>
      <Form.Control type='text' value={ tag.id } onChange={ e => SetTag({...Tag,id: e.target.value}) } placeholder='Tag Name' />
      </Form.Group> 
     <Form.Group mt={ 3 }>
     <Button variant='primary' className='btn btn-sm' type='submit'>Update</Button>
     </Form.Group>
     </Form> 
  </>
}

    </>
  )
};

export default Tag;