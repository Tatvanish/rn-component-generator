import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class COMPONENT_NAME extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> COMPONENT_NAME </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


export default COMPONENT_NAME;