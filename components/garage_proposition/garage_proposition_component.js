import React from 'react';
import { Form, Item, Input, Label, Button, Icon, Text, Container } from 'native-base';
import GaragePropositionStyle from './garage_proposition_style';

export default class GarageProposition extends React.Component {
  render() {
    return (
      <Container style={GaragePropositionStyle.formContainer}>
        <Form style={GaragePropositionStyle.form}>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Address</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Phone</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Description</Label>
            <Input />
          </Item>
        </Form>
        <Button
          iconLeft
          primary
          block
          rounded
          style={GaragePropositionStyle.submitButton}
        >
          <Icon name='send' />
          <Text>Submit</Text>
        </Button>
      </Container>
    );
  }
}
