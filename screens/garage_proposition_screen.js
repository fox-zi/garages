import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';


export default class GaragePropositionScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
          </Form>
          <Button iconLeft primary>
            <Icon name='send'/>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
