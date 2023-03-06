import React from 'react';
import Navbar from '../Navbar/Navbar';
import './style.css';
import Row from "../Row";
import Col from '../Col';

function Header(){
    return(
    <Row>
        <Col size="md-12">
          <Navbar />
          </Col>
    </Row>
    )
}

export default Header;