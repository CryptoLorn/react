import React from 'react';

const Dog = ({dog, deleteDog}) => {
    return (
        <div>
            {dog} <button onClick={() => deleteDog(dog)}>Delete</button>
        </div>
    );
};

export default Dog;