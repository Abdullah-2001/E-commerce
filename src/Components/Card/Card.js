import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Card.css';

const ProductCard = ({ style, children }) => {
  return (
    <CardGroup>
      <Card className={style}>
        {children}
      </Card>
    </CardGroup>
  )
}

export default ProductCard;