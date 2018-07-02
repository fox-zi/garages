import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Header, Button, Icon, Input, Item } from 'native-base';
import SearchBarStyle from './search_bar_style'

export default class SearchBar extends React.Component {
  render() {
    return (
      <Header
        searchBar
        rounded
        style={SearchBarStyle.searchBar}
      >
        <Item>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('GarageSearchResults')}
          >
            <Icon name="ios-search" />
          </TouchableOpacity>
          <Input placeholder="Search" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    );
  }
}
