import  { combineReducers } from 'redux';

import blogsReducer from "./blogs"
import authReducer from "./auth"

const rootReducer = combineReducers({
    blogsReducer, authReducer
})
export default rootReducer;