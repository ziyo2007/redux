import {createStore, combineReducers} from 'redux'
import Shop from './shop'

const reducer = combineReducers({Shop})

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION_&& window.__REDUX_DEVTOOLS_EXTENCION__())

export default store
