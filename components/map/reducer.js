import * as MapActions from './actions';

const initialState = {
  selectedGarageId: -1
};

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case MapActions.SELECT_GARAGE:
      console.log('SELECT_GARAGE: ' + action.id);
      return state;  
    default:
      return state;
  }
}
