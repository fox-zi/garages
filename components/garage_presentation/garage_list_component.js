import React from 'react';
import { FlatList } from 'react-native';
import { Container } from 'native-base';
import GarageItem from './garage_item_component';
import GaragePresentationStyle from './garage_presentation_style';

export default class GarageList extends React.Component {
  garages = [
    { key: '1', name: 'Thanh Giang', address: 'adress1 abcdef' },
    { key: '2', name: 'Van Truong', address: 'adress2 abcdef' },
    { key: '3', name: 'Kim Tin', address: 'adress3 abcdef' },
  ];

  render() {
    return (
      <Container style={GaragePresentationStyle.listContainer}>
        <FlatList
          data={this.garages}
          renderItem={({ item }) => <GarageItem data={item} navigation={this.props.navigation}/>}
        />
      </Container>
    );
  }
}
