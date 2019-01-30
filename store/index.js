// Module imports
import {
  createStore,
  applyMiddleware,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'





// Component imports
import * as actions from './actions'
import defaultState from './initialState'
import reducer from './reducers'





const initStore = (initialState = defaultState) => {
  const middleware = applyMiddleware(thunkMiddleware)
  
  const reduxComposition = composeWithDevTools(middleware)
  
  return createStore(reducer, initialState, reduxComposition)
}

export {
  actions,
  initStore,
}