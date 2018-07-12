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
