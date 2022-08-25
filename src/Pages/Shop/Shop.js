import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Checkbox from '../../Components/Checkbox/Checkbox';
import Input from '../../Components/Input/Input';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Button from '../../Components/Button/Button';
import InitialItems from '../../Products.json';
import shopItems from '../../Shop.json';
import ProductCard from '../../Components/Card/Card';
import './Shop.css';

const Shop = () => {

  const [filterItems, setFilterItems] = useState()
  const categories = [
    { name: "T-shirt" },
    { name: "Shirt" },
    { name: "Jeans" },
    { name: "Jacket" },
    { name: "Shoes" },
    { name: "Glasses" },
  ]

  function getFilteredItems(v) {
    const fil = shopItems.products.filter(({ category }) => category === v.name)
    setFilterItems(fil)
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={3} style={{ padding: "0" }}>
            <Sidebar style="shop-sidebar">
              <div className='category-container'>
                <p className='category'>categories</p>
                <div className='select-category-container'>
                  {categories.map(v => {
                    return (
                      <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                        <Checkbox onClick={() => getFilteredItems(v)} />
                        <p style={{ margin: "0 0 0 15px", fontSize: "18px", fontWeight: "400" }}>{v.name}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className='price-container'>
                <p className='price'>Price</p>
                <div className='select-price-container'>
                  <Input type="text" placeholder="Min price" style="min-price" />
                  <Input type="text" placeholder="Max price" style="max-price" />
                </div>
              </div>
              <div className='size-container'>
                <p className='size'>Size</p>
                <div className='select-size-container'>
                  <Button text="XL" style="sizes" />
                  <Button text="LG" style="sizes" />
                  <Button text="MD" style="sizes" />
                  <Button text="SM" style="sizes" />
                </div>
              </div>
            </Sidebar>
          </Col>
          <Col lg={8} style={{ padding: "0" }}>
            {filterItems ? filterItems.map((v) => {
              return (
                <ProductCard style="shop-cards">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                      <img src={v.image} alt="" />
                    </div>
                    <div style={{ padding: "0 30px" }}>
                      <p className='shop-card-name'>{v.name}</p>
                      <p className='shop-card-price'>$ {v.price}</p>
                      <p className='shop-card-description'>{v.description}</p>
                      <div style={{ display: "flex" }}>
                        <Button style="add-shop-card" text="Add to cart" />
                        <Button style="view-shop-card" text="View product" />
                      </div>
                    </div>
                  </div>
                </ProductCard>
              )
            }) : InitialItems.products.map((v) => {
              return (
                <ProductCard style="shop-cards">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                      <img src={v.image} alt="" />
                    </div>
                    <div style={{ padding: "0 30px" }}>
                      <p className='shop-card-name'>{v.name}</p>
                      <p className='shop-card-price'>$ {v.price}</p>
                      <p className='shop-card-description'>{v.description}</p>
                      <div style={{ display: "flex" }}>
                        <Button style="add-shop-card" text="Add to cart" />
                        <Button style="view-shop-card" text="View product" />
                      </div>
                    </div>
                  </div>
                </ProductCard>
              )
            })}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Shop