import {createStore} from 'redux'
import {itemReducer} from './reducers/reducer'

const store = createStore(itemReducer)

export default store