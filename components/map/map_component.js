import React from 'react';
import { View } from 'react-native';
import { Icon, Fab } from 'native-base';
import MapView from 'react-native-maps';
import styles from './map_styles';


const LATITUDE_DELTA = 0.1
const LONGTITUDE_DELTA = 0.8
class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    arrayMarkers = [
    ];
    this.state = {
      region: {
        latitude: 10,
        longitude: 106,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGTITUDE_DELTA,
      },
      error: null,
      markers: arrayMarkers,
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
  getPositionCurrent(){

  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
  getMoviesFromApiAsync() {
    return fetch('http://fixmybike.herokuapp.com/api/v1/garages.json?token=2e900f7419c3d358a28f48cc9ee5803a')
      .then((response) => response.json())
      .then((responseJson) => {
        for (let value of responseJson) {
          arrayMarkers.push({
            latitude: value.latitude,
            longitude: value.longitude,
            name: value.name,
            description: value.description,
          })
        }
        this.setState({ markers: arrayMarkers })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onPress(data) {
    this.getMoviesFromApiAsync()

  }

  render() {
    return (
      <View style={ styles.container }>
        <MapView
          style={ styles.map }
          region={ this.state.region }
          onPress={ this.onPress.bind(this) }
        >
          <MapView.Marker
            coordinate={ this.state.region }>
            <View style={ styles.radius }>
              <View style={ styles.marker }/>
            </View>
          </MapView.Marker>
          { this.state.markers.map((marker, key) =>(
            <MapView.Marker
              key={ key }
              coordinate={ marker }
              title={ marker.name }
              description={ marker.description }>
            </MapView.Marker>
          ))}
        </MapView>
        <Fab
            direction="up"
            containerStyle={{}}
            style={ styles.locateFloatButton }
            position="bottomRight">
            <Icon name="locate" style={{ color: '#000000' }} />
          </Fab>
          <Fab
            direction="up"
            containerStyle={{}}
            style={ styles.propositionFloatButton }
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('GarageProposition')}>
            <Icon name="add"/>
          </Fab>
      </View>
    );
  }
}
export default MapComponent
