import React from 'react';
import './Sidebar.css';

const Sidebar = ({ children, style }) => {
    return (
        <div className={style}>
            {children}
        </div>
    )
}

export default Sidebar