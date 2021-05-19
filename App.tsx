import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useCallback, useRef } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import Screen from './components'
export default function App() {

  return (
    <Screen />
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
