import { combineReducers } from 'redux'
import mapReducer from './map/map_reducer.js'

const reducer = combineReducers({
  map: mapReducer,
})
export default reducer;
