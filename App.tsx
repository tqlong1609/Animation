import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useCallback, useRef } from 'react';
import { StyleSheet, Button, View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import BottomSheet from './BottomSheet2'
import BottomSheet, {
  BottomSheetScrollView
} from './src';
function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const data = useMemo(
    () =>
      Array(20)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => [0, '50%', '90%'], []);

  const handleSnapPress = useCallback(index => {
    bottomSheetRef.current?.snapTo(index);
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const handleSheetChange = () => {
    console.log("change");
  }

  const _onPress = (item: any) => {
    console.log("123", item);
  }
  // render
  const renderItem = useCallback(
    (item) => {
      console.log(item);
      return (
        <View>
          <TouchableOpacity style={styles.itemContainer}
            onPress={() => _onPress(item)}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
          <TextInput style={{ width: 100, height: 20, backgroundColor: 'yellow' }} />
        </View>
      )
    },
    []
  );

  return (
    <View style={styles.container}>
      {/* <Button title="Snap To 90%" onPress={() => handleSnapPress(1)} /> */}
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      {/* <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} /> */}
      <Button title="Close" onPress={() => handleClosePress()} />
      <TextInput style={{ width: 100, height: 20, backgroundColor: 'blue' }} />
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
    backgroundColor: 'red',
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

export default App