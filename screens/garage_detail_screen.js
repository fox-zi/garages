import React from 'react';
import { Container } from 'native-base';
import GarageDetail from '../components/garage_presentation/garage_detail_component';

export default class GarageDetailScreen extends React.Component {  
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('garageName', ''),
    };
  };

  render() {
    return (
      <Container>
        <GarageDetail navigation={this.props.navigation} />
      </Container>
    );
  }
}
