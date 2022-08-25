import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart4 } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

function NavbarComponent() {
    const state = useSelector((state) => state.reducer.cart)
    return (
        <>
            <Navbar expand="sm" style={{ padding: "10px 30px", boxShadow: "0 1px 3px rgb(0 0 0 / 10%)", backgroundColor: "whitesmoke" }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-between">
                    <Navbar.Brand style={{ fontWeight: "700", fontSize: "35px", fontFamily: "Nunito Sans, sans-serif" }}>Eko<span style={{ color: "#F85437" }}>Cart</span></Navbar.Brand>
                    <Nav className='link-container'>
                        <Link to="/">HOME</Link>
                        <Link to="/shop">SHOP</Link>
                        <Link to="/shop">BLOGS</Link>
                        <Link to="/shop">ABOUT US</Link>
                        <Link to="/shop">CONTACT US</Link>
                    </Nav>
                    <Nav className='link-container'>
                        <Link to="/cart" style={{ color: "black" }}>
                            <div style={{ position: "relative" }}>
                                <div style={{ position: "absolute", top: "-8px", right: "-12px", backgroundColor: "black", width: "24px", height: "24px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <p style={{ color: "whitesmoke", fontWeight: "700", margin: "0" }}>{state?.length}</p>
                                </div>
                            </div>
                            <BsCart4 style={{ width: "35px", height: "35px", color: "darkgoldenrod" }} />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default NavbarComponent;