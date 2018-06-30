import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Header, List, ListItem, Button, Icon, Input, Item, Content } from 'native-base';


export default class GarageSearchResultsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }
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
        <Content>
          <List>  
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
