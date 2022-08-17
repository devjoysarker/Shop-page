import React from 'react';
import { Button, Table } from 'react-bootstrap';

const Dash = () => {
  return (
    <>
    <h2>Dashboard</h2>
    <hr />
    <Button variant="success" className="btn-sm">Add New Catagory</Button>
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

export default Dash;