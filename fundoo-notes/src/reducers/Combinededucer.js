import { combineReducers } from 'redux'
import titleReducer from './titleReducer'
import searchBarReducer from './SearchBarReducer'

const rootReducer = combineReducers({
    searchBarReducer,
    titleReducer
})
export default rootReducer;