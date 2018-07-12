import React from 'react';
import { AppNavigation } from './navigation';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { store } from './store';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async loadFont() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadFont}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <AppNavigation/>
      </Provider>
    );
  }
}
