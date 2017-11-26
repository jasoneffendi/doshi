import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
      super()
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Doshi!</Text>
        <Text>Welcome to Doshi!</Text>
        <Text>Choose a name for your Doshi!</Text>
        <Button
        title="Press to continue"
        onPress={() => {navigate('Main')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
