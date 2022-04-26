import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <div className="header-container">
            <Nav className="app-header" justify variant="tabs" defaultActiveKey="/home">
                <div className="app-header-text">
                    Powered by .. CharityBase
                </div>
                {/* <img className="header-logo" src={logo}></img> */}
                <Nav.Item className="app-header-item">
                    <Nav.Link as={Link} to={"/charities"}>Charity List</Nav.Link>
                </Nav.Item>
                <Nav.Item className="app-header-item">
                    <Nav.Link as={Link} to={"/charitytable"}>Charity Table</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>

    );
  }
  
  export default Header
