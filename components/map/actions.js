export const SELECT_GARAGE = 'SELECT_GARAGE';

export function selectGarage(id){
  return {
    type: SELECT_GARAGE,
    id: id
  }
}
