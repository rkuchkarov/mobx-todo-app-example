import React, { useState } from 'react';

const Input = ({ onAdd }) => {
    const [value, setValue] = useState('');
    
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const submit = () => {
        onAdd(value);
        setValue('');
    }

    const handleClick = () => {
        submit()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            submit();
          }
    }
    
    return (
    <div>
        <input value={value} onChange={handleChange} onKeyDown={handleKeyDown}/>
        <button onClick={handleClick}>Добавить</button>
    </div>
)};

export default Input;