import React from 'react'
import { createStore, } from 'redux'
import { Provider } from 'react-redux'
import App from './components/APP'
import rootReducer from './reducers'
import * as ReactDom from "react-dom";
const store = createStore(rootReducer)
console.log(store.getState())

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)