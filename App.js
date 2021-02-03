import React from 'react';
import { SafeAreaView } from 'react-native';
import AppContainer from './router';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <AppContainer/>
      </SafeAreaView>
    )
  }
}
