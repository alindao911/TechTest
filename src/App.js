import 'react-native-gesture-handler';
import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {Navigator} from './navigation';
import store from './store';

export default class App extends React.PureComponent {
  render() {
    return (
      <StoreProvider store={store}>
        <Navigator />
      </StoreProvider>
    );
  }
}
