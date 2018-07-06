import React from 'react';
import { Container } from 'native-base';
import MapComponent from '../components/map/map_component';
import SearchBar from '../components/searching/search_bar_component'

export default class MainScreen extends React.Component {
  render() {
    return (
      <Container>
        <SearchBar navigation={this.props.navigation} />
        <MapComponent
          navigation={this.props.navigation}
        />
      </Container>
    );
  }
}
