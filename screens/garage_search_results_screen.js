import React from 'react';
import { Container } from 'native-base';
import SearchBar from '../components/searching/search_bar_component'
import GarageList from '../components/garage_presentation/garage_list_component'

export default class GarageSearchResultsScreen extends React.Component {
  render() {
    return (
      <Container>
        <SearchBar navigation={this.props.navigation} />
        <GarageList navigation={this.props.navigation} />
      </Container>
    );
  }
}
