import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <>
    <h2>Products </h2>
    <hr />
    <Link to='/admin/productAdd' className="btn btn-primary btn-sm">Add New Product</Link>
    <hr />
    <Table>
      <thead>
        <th>#</th>
        <th>Name</th>
        <th>Slug</th>
        <th>Action</th>
      </thead>
     <tbody>
      <td>1</td>
      <td>men</td>
      <td>men</td>
      <td>
        <Button  variant="info" className="btn-sm">View</Button>
        <Button variant="warning" className="btn-sm">Edit</Button>
        <Button variant="danger" className="btn-sm">Delete</Button>
      </td>
     </tbody>
    </Table>
    </>
  )
};

export default Products;