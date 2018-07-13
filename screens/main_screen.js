import React from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MapActions from '../components/map/actions';
import MapComponent from '../components/map/map_component';
import SearchBar from '../components/searching/search_bar_component';

class MainScreen extends React.Component {
  render() {
    return (
      <Container>
        <SearchBar navigation={this.props.navigation} />
        <MapComponent
          navigation={this.props.navigation}
          selectGagare={() => this.selectGarage()}
        />
      </Container>
    );
  }

  // Test method to check redux action
  selectGarage() {
    let id = Math.floor(Math.random() * 100) + 1; // Random 1 -> 100
    this.props.actions.selectGarage(id);
  }
}

function mapStateToProps(state) {
  return {
    selectedGarageId: state.mapReducer.selectedGarageId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MapActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
