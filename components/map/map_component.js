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
    this.state = {
      region: {
        latitude: 10,
        longitude: 106,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGTITUDE_DELTA,
      },
      error: null,
      markers: [],
      firstLoading: true,
      isZoom: false,
    };
  }
  componentDidMount() {
    self = this
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
      this.getPositionCurrent()
    }
  }
  getPositionCurrent(){
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        self.setState({
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

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  getMoviesFromApiAsync() {
    let arrayMarkers = []
    let status_ok = true
    let url = `https://fixmybike.herokuapp.com/api/v1/garages/find_garages?token=2e900f7419c3d358a28f48cc9ee5803a&longitude=${this.state.region.longitude}&latitude=${this.state.region.latitude}&distance=${5}`
    console.log(url)
    return fetch(url)
      .then((response) => {
        if (response.status==204) {
          return status_ok = false
        } else {
          return response.json();
        }
      })
      .then((responseJson) => {
        if (!status_ok) {
          // if (!self.state.firstLoading) alert('Không tìm thấy địa điểm, bạn nên tìm rộng ta tí xem sao!')
        } else {
          for (let value of responseJson) {
            arrayMarkers.push({
              latitude: value.latitude,
              longitude: value.longitude,
              name: value.name,
              description: value.description,
            })
          }
        }
        self.setState({ markers: arrayMarkers, firstLoading: false })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onPress(data) {
    // this.getMoviesFromApiAsync()
  }

  onRegionChangeHandle(region) {
    self.setState({ region: region });
    self.getMoviesFromApiAsync()
  }
  render() {
    return (
      <View style={ styles.container }>
        <MapView
          style={ styles.map }
          region={ this.state.region }
          onRegionChangeComplete={this.onRegionChangeHandle}
          zoomEnabled={true}
          showsUserLocation={true}
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
            <Icon name="locate" style={{ color: '#000000' }}
            onPress= { this.getPositionCurrent } />
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
