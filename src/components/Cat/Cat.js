import React from 'react';

const Cat = ({cat, deleteCat}) => {
    return (
        <div>
            {cat} <button onClick={()=>deleteCat(cat)}>Delete</button>
        </div>
    );
};

export default Cat;