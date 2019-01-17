import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';

// Actions
const SUB = 'SUB';
const sub = () => ({type: SUB});
const ADD = 'ADD';
const add = () => ({type: ADD});

const PRICE = 'PRICE';
// const inputPrice = price => ({type: PRICE, price});
const inputPrice =(price) =>{
  return {
    type:PRICE,
    price
  }
}
// Reducers
const counter = (state = 0, action) => {
  switch (action.type) {
    case SUB:
      return state - 1;
    case ADD:
      return state + 1;
    default:
      return state;
  }
}

const price = (state = 1, action) => {
  switch (action.type) {
    case PRICE:
      return action.price;
    default:
      return state;
  }
}

// store
const store = createStore(combineReducers({counter, price}));

// conponents
const DOM = ({counter, sub, add, price, result, inputPrice}) => (
    <div>
      <div>
        <input type="button" value="-" onClick={sub}/>
        <input type="text" value={counter} style={{width: "50px", textAlign: "center"}}/>
        <input type="button" value="+" onClick={add}/>
      </div>
      <input type="text" value={price} style={{width: "94px"}} onChange={e => inputPrice(e.target.value)}/>
      <p>{result}</p>
    </div>
)

// containers
const Counter = connect(
    state => ({
      ...state,
      result: state.counter * state.price
    }),
    dispatch => {
      return {
        sub: () => dispatch(sub()),
        add: () => dispatch(add()),
        inputPrice: price => dispatch(inputPrice(price))
      }
    }
)(DOM)

// render
render(
    <Provider store={store}>
      <Counter/>
    </Provider>,
    document.getElementById('root')
)