export const SELECT_GARAGE = 'SELECT_GARAGE';
export const MY_POSITION = 'MY_POSITION';
export const GARAGE_NEAR = 'export const';
export const LATITUDE_DELTA = 0.1;
export const LONGTITUDE_DELTA = 0.8;
export const DOMAIN = 'https://fixmybike.herokuapp.com'
export const TOKEN = '2e900f7419c3d358a28f48cc9ee5803a'
export function selectGarage(garage){
  return {
    type: SELECT_GARAGE,
    garage: garage
  }
}
export function myPostion(postion){
  return {
    type: MY_POSITION,
    postion: postion
  }
}
export function garageNears(garages, region){
  return {
    type: GARAGE_NEAR,
    garages: garages,
    postion: region
  }
}
