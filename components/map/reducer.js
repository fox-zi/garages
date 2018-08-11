import * as MapActions from './actions';

const initialState = {
  garage: {},
  postion: {
    latitude: 10,
    longitude: 106,
    latitudeDelta: MapActions.LATITUDE_DELTA,
    longitudeDelta: MapActions.LONGTITUDE_DELTA,
  },
  myPosition: {
    latitude: 10,
    longitude: 106,
    latitudeDelta: MapActions.LATITUDE_DELTA,
    longitudeDelta: MapActions.LONGTITUDE_DELTA,
  },
  garages: [],
};
export default function mapReducer(state = initialState, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case MapActions.SELECT_GARAGE:
      newState.garage = action.garage
      newState.postion = action.garage
      return newState
    case MapActions.MY_POSITION:
      newState.postion = action.postion
      newState.myPosition = action.postion
      return newState
    case MapActions.GARAGE_NEAR:
      if (Math.abs(state.postion.latitude - action.postion.latitude) > 0.009 || Math.abs(state.postion.longitude - action.postion.longitude) > 0.009)
        newState.postion = action.postion
      newState.garages = action.garages
      return newState
    default:
      return state;
  }
}
