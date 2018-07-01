import { StyleSheet } from 'react-native';

const GaragePresentationStyle = StyleSheet.create({
  listContainer: {
    backgroundColor: '#FFFFFF',
  },
  itemContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  itemElementWrapper: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemGarageIcon: {
    width: 30
  },
  itemDirectionIcon: {
    width: 50
  },
  itemContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  detailContainer: {
    backgroundColor: '#FFFFFF',
  },
  detailRow: {
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  directionButtonContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  overlayDetailButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
});

export default GaragePresentationStyle