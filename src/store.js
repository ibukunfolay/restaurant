import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { profileListReducers } from './reducers/homeReducers'
import { orderReducer } from './reducers/orderReducers'

const initialState = {}
const reducer = combineReducers({
    profileList: profileListReducers,
    order: orderReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store