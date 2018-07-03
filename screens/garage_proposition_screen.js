import React from 'react';
import { Container } from 'native-base';
import GarageProposition from '../components/garage_proposition/garage_proposition_component';

export default class GaragePropositionScreen extends React.Component {
  render() {
    return (
      <Container>
        <GarageProposition />
      </Container>
    );
  }
}
