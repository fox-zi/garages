import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './map_styles'
const LATITUDE_DELTA = 0.1
const LONGTITUDE_DELTA = 0.8
class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 10,
        longitude: 106,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGTITUDE_DELTA,
      },
      error: null,
    };
  }
  componentDidMount() {
    if (this.props.region) {
      this.setState({
        region: {
          latitude: this.props.region.latitude,
          longitude: this.props.region.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGTITUDE_DELTA,
        }, error: null
      })
    }
    else {
      this.watchId = navigator.geolocation.watchPosition(
        (position) => {
          this.setState({
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGTITUDE_DELTA,
            },
            error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      {  enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
      );
    }
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
  render() {
    return (
      <View style={ styles.container }>
        <MapView
          style={ styles.map }
          region={ this.state.region }>
          <MapView.Marker
            coordinate={ this.state.region }>
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
