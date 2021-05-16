import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useCallback, useRef } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
// import BottomSheet from './BottomSheet'
import BottomSheet, {
  BottomSheetScrollView
} from './src';
export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => ['50%', '90%'], []);

  const handleSnapPress = useCallback(index => {
    bottomSheetRef.current?.snapTo(index);
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const handleSheetChange = () => {
    console.log("change");
  }

  // render
  const renderItem = useCallback(
    (item) => {
      console.log(item);
      return (
        <View style={styles.itemContainer}>
          <Text>{item}</Text>
        </View>
      )
    },
    []
  );

  return (
    <View style={styles.container}>
      <Button title="Snap To 90%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(0)} />
      {/* <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} /> */}
      <Button title="Close" onPress={() => handleClosePress()} />
      <BottomSheet
        // style={styles.bottomSheet}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <BottomSheetScrollView
        // contentContainerStyle={styles.contentContainer}
        >
          {data.map(renderItem)}
        </BottomSheetScrollView>
      </BottomSheet>
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
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
    alignItems: 'center'
  },
});
