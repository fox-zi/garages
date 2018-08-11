import React from 'react';
import { View } from 'react-native';
import { Icon, Fab } from 'native-base';
import MapView from 'react-native-maps';
import styles from './map_styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MapReducer from './actions';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLoading: true,
      isZoom: false,
    };
  }
  componentDidMount() {
    self = this
    this.getPositionCurrent()
  }
  getPositionCurrent(){
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        return self.props.actions.myPostion({
          latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           latitudeDelta: MapReducer.LATITUDE_DELTA,
           longitudeDelta: MapReducer.LONGTITUDE_DELTA,
        })
    },
    (error) => alert('Không tìm thấy vị trí của bạn!'),
    {  enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  async getMoviesFromApiAsync(region) {
    try {
      let arrayMarkers = []
      let status_ok = true
      let url = `${MapReducer.DOMAIN}/api/v1/garages/find_garages?token=${MapReducer.TOKEN}&longitude=${region.longitude}&latitude=${region.latitude}&distance=${5}`
      console.log(url)
      let response = await (await fetch(url));
      if (response.status==204) {
        return status_ok = false
      } else {
        let responseJson = await response.json();
        for (let value of responseJson) {
          arrayMarkers.push({
            latitude: value.latitude,
            longitude: value.longitude,
            name: value.name,
            description: value.description,
          })
        }
      }
      return self.props.actions.garageNears(arrayMarkers, region);
    } catch (error) {
      console.error(error);
    }
  }
  getMoviesFromApiAsync1(region) {
    let arrayMarkers = []
    let status_ok = true
    let url = `${MapReducer.DOMAIN}/api/v1/garages/find_garages?token=${MapReducer.TOKEN}&longitude=${region.longitude}&latitude=${region.latitude}&distance=${5}`
    fetch(url)
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
        return self.props.actions.garageNears(arrayMarkers, region);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onRegionChangeHandle(region) {
    self.getMoviesFromApiAsync(region)
  }
  render() {
    return (
      <View style={ styles.container }>
        <MapView
          style={ styles.map }
          region={ this.props.region }
          onRegionChangeComplete={this.onRegionChangeHandle}
          zoomEnabled={true}
          showsUserLocation={true}
        >
          <MapView.Marker
            coordinate={ this.props.region }>
            <View style={ styles.radius }>
              <View style={ styles.marker }/>
            </View>
          </MapView.Marker>
          { this.props.markers.map((marker, key) =>(
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
function mapStateToProps(state) {
  return {
    garage: {
      latitude: state.mapReducer.garage.latitude,
      longitude: state.mapReducer.garage.longitude,
      name: state.mapReducer.garage.name,
      description: state.mapReducer.garage.description,
      latitudeDelta: MapReducer.LATITUDE_DELTA,
      longitudeDelta: MapReducer.LONGTITUDE_DELTA,
    },
    region: {
      latitude: state.mapReducer.postion.latitude,
      longitude: state.mapReducer.postion.longitude,
      latitudeDelta: state.mapReducer.postion.latitudeDelta,
      longitudeDelta: state.mapReducer.postion.longitudeDelta,
    },
    myPostion: {
      latitude: state.mapReducer.myPosition.latitude,
      longitude: state.mapReducer.myPosition.longitude,
      latitudeDelta: state.mapReducer.myPosition.latitudeDelta,
      longitudeDelta: state.mapReducer.myPosition.longitudeDelta,
    },
    markers: state.mapReducer.garages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MapReducer, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent)
