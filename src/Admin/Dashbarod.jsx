import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './admin.css'

const Dashbarod = () => {
  return (
    <section>
        <Container className='my-5 dash' >
            <Row> 
                <Col md={ 3 }>
                    <ul className='list-group dash-manu'>
                        <li className='list-group-item'><Link to="/admin/dashborad">Dashbarod</Link></li>
                        <li className='list-group-item'><Link to="/admin/catagory">Catagory</Link></li>
                        <li className='list-group-item'><Link to="/admin/products">Produects</Link></li>
                        <li className='list-group-item'><Link to="/admin/tag">Tags</Link></li>
                        <li className='list-group-item'><a href="https://">Logout</a></li>
                    </ul>
                </Col>
                <Col md={ 9 }>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Dashbarod;