import React from 'react'
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native'

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 10,
    transform: [
      { translateX: -25 },
      { translateY: -25 },
    ]
  },

})