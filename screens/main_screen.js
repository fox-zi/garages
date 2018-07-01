import React from 'react';
import { Container } from 'native-base';
import MapComponent from '../map/map_component';
import SearchBar from '../searching/search_bar_component'

export default class MainScreen extends React.Component {
  render() {
    return (
      <Container>
        <SearchBar navigation={this.props.navigation} />
        <MapComponent
          region={{
            latitude: 10.8231,
            longitude: 106.6297,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          navigation={this.props.navigation}
        />
        
      </Container>
    );
  }
}
