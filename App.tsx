import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useCallback, useRef } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
export default function App() {

  return (
    <View style={styles.container}>
      <Text>Animation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
