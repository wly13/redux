import React, {Component} from 'react';

class Counter extends Component {
  render() {
    const {CounterReducer,addButton,subtractButton} = this.props
    console.log(CounterReducer)
    return (
        <div>
          <button onClick={addButton}>+</button>
          <span>{CounterReducer}</span>
          <button onClick={subtractButton}>-</button>
        </div>
    );
  }
}

export default Counter;