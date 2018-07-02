import React from 'react';
import TouchableOpacity from 'react-native';
import { Text, Icon, Button, View } from 'native-base';
import GaragePresentationStyle from './garage_presentation_style';

export default class GarageItem extends React.Component {
  render() {
    return (
      <View style={GaragePresentationStyle.itemContainer}>
        <View style={[
          GaragePresentationStyle.itemElementWrapper,
          GaragePresentationStyle.itemGarageIcon,
        ]}>
          <Icon name="construct" />
        </View>
        <View style={[
          GaragePresentationStyle.itemElementWrapper,
          GaragePresentationStyle.itemContent,
        ]}>
          <Text>{this.props.data.name}</Text>
          <Text note>{this.props.data.address}</Text>
          <Button transparent
            style={GaragePresentationStyle.overlayDetailButton}
            onPress={() => {
              this.props.navigation.navigate('GarageDetail', {
                garageName: this.props.data.name,
              });
            }}
          />
        </View>
        <View style={[
          GaragePresentationStyle.itemElementWrapper,
          GaragePresentationStyle.itemDirectionIcon,
        ]}>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name="arrow-round-forward" />
          </Button>
        </View>
      </View>
    );
  }
}
