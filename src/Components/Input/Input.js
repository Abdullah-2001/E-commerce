import React from 'react';
import './Input.css';

const Input = ({ type, placeholder, style }) => {
    return (
        <input type={type} placeholder={placeholder} className={style} />
    )
}

export default Input