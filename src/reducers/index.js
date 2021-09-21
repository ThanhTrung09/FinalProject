import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import authReducer from './authReducer'
import DetailReducer from './detailReducer'
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
  authReducer,
  cartReducer,
  DetailReducer
})

export default rootReducer