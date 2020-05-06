import React from 'react';

const Item = ({ index, title, onDelete }) => {
    const handleClick = () => { 
        onDelete(index);
    }
    
    return (
    <div>
        <div onClick={handleClick}>{title}</div>
    </div>
)};

export default Item;