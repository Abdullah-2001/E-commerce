import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from '../Components/Navbar/Navbar';
import Cart from '../Pages/Cart/Cart';
import Home from '../Pages/Home/Home';
import Details from '../Pages/Product-details/Details';
import Shop from '../Pages/Shop/Shop';

const RouterApp = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<NavbarComponent/>}>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/items:id' element={<Details />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default RouterApp;