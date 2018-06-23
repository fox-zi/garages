import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './map_styles'
class MapComponent extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <MapView
          style={ styles.map }
          region={ this.props.region }>
          <MapView.Marker
            coordinate={ this.props.region }>
              <View style={ styles.radius }>
                <View style={ styles.marker }/>
              </View>
            </MapView.Marker>
        </MapView>
      </View>
    );
  }
}
export default MapComponent
