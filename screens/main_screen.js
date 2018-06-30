import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MapComponent from '../map/map_component';
import { Container, Header, View, Button, Icon, Fab, Input, Item } from 'native-base';


export default class MainScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header
          searchBar
          rounded
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <View style={{ flex: 1 }}>
          <MapComponent region={{
            latitude: 10.8231,
            longitude: 106.6297,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }} />
          <Fab
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#FFFFFF' }}
            position="bottomRight">
            <Icon name="locate" style={{ color: '#000000' }} />
          </Fab>
          <Fab
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#F44336', bottom: 60}}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('GarageProposition')}>
            <Icon name="add"/>
          </Fab>
        </View>
      </Container>
    );
  }
}
