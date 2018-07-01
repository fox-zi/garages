import { StyleSheet } from 'react-native';
const map_styles = StyleSheet.create({
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 /2,
    overflow: 'hidden',
    backgroundColor: '#039be582',
    borderWidth: 1,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20/2,
    backgroundColor: '#273840ba'
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: -1
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  propositionFloatButton: {
    backgroundColor: '#F44336',
    bottom: 60
  },
  locateFloatButton: {
    backgroundColor: '#FFFFFF'
  },
});

export default map_styles
