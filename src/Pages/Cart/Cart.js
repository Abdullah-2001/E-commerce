import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BsCartXFill } from 'react-icons/bs'
import './Cart.css';

const Cart = () => {

  const [items, setItems] = useState()
  const state = useSelector((state) => state.reducer.cart)

  useEffect(() => {
    setItems(state)
    console.log(state);
  }, [state])

  return (
    <div>
      {items?.length === 0 ? (
        <div className='no-items'>
          <BsCartXFill size={100} color="grey" />
          <p>No items in cart</p>
        </div>
      ) : (
        items?.map((v) => {
          return (
            <div key={v.id}>
              <h1>{v.name}</h1>
            </div>
          )
        })
      )}
    </div>
  )

}

export default Cart