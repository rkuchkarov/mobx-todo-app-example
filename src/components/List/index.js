import React from 'react';
import Item from './Item';

const List = ({ items, onDelete }) => {
    return (
        <div>
            {
                items.map(({ title }, index) => <Item key={ index } index={index} title={title} onDelete={onDelete} />)
            }
        </div>
)};

export default List;