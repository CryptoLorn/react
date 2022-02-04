import {useForm} from "react-hook-form";
import React, {useReducer} from 'react';

import Cat from "./components/Cat/Cat";
import Dog from "./components/Dog/Dog";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      if (action.target === 'cat') {
        return {...state, cats: [...state.cats, action.payload]};
      }

      return {...state, dogs: [...state.dogs, action.payload]};
    case 'delete':
      if (action.target === 'cat') {
        const arr = state.cats.filter(cat => cat !== action.payload);
        return {...state, cats: arr};
      }

      const arr = state.dogs.filter(dog => dog !== action.payload);
      return {...state, dogs: arr};
    case 'reset':
      return {...state, cats: [], dogs: []};
    default:
      throw new Error('Error');
  }
};

const App = () => {
  const {handleSubmit, register} = useForm();
  const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

  const addCat = (cat) => {
    dispatch({type: 'add', target: 'cat', payload: cat.cats});
  };

  const deleteCat = (cat) => {
    dispatch({type: 'delete', target: 'cat', payload: cat});
  };

  const addDog = (dog) => {
    dispatch({type: 'add', target: 'dog', payload: dog.dogs});
  };

  const deleteDog = (dog) => {
    dispatch({type: 'delete', target: 'dog', payload: dog});
  };

  return (
      <div className={'wrapper'}>
        <div>
          <form onSubmit={handleSubmit(addCat)}>
            <div><label>Add cat:<input type="text" {...register('cats')}/></label></div>
            <button>Add</button>
          </form>

          <div>{state.cats.map(cat => <Cat key={Math.random()} cat={cat} deleteCat={deleteCat}/>)}</div>
        </div>

        <div>
          <form onSubmit={handleSubmit(addDog)}>
            <div><label>Add dog:<input type="text" {...register('dogs')}/></label></div>
            <button>Add</button>
          </form>

          <div>{state.dogs.map(dog => <Dog key={Math.random()} dog={dog} deleteDog={deleteDog}/>)}</div>
        </div>

        <div><button onClick={() => dispatch({type: 'reset'})}>Reset All</button></div>
      </div>
  );
};

export default App;