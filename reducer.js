import { combineReducers } from 'redux'
import mapReducer from './components/map/reducer'

const reducer = combineReducers({
  mapReducer: mapReducer,
})

export default reducer;
