import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import date from './reducer'
import thunk from 'redux-thunk'

const store = createStore(date, composeWithDevTools(applyMiddleware(thunk)))

export default store
