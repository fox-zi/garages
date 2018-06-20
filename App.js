import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapMain from './map/map_component'
export default class App extends React.Component {
  render() {
    return (
      <MapMain />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
