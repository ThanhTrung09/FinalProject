import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'


export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderBottomWidth: 0.5,
    padding: 5,
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderWidth: 1
  }
})