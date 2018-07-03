import React from 'react';
import { Text, View, Container, Button } from 'native-base';
import GaragePresentationStyle from './garage_presentation_style';

export default class GarageDetail extends React.Component {
  render() {
    return (
      <Container style={GaragePresentationStyle.detailContainer}>
        <View style={GaragePresentationStyle.detailRow}>
          <Text>Address: adress1 abcdef</Text>
        </View>
        <View style={GaragePresentationStyle.detailRow}>
          <Text>Phone: 01224465858</Text>
        </View>
        <View style={GaragePresentationStyle.detailRow}>
          <Text>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis neque, lacinia consectetur neque.</Text>
        </View>
        <View
          style={GaragePresentationStyle.directionButtonContainer}
        >
          <Button
            primary
            block
            rounded
            onPress={() => this.props.navigation.navigate('Home')}
            >
            <Text>Direction</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
