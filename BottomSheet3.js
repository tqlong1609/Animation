import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Dimensions,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import BottomSheet from './BottomSheet_Ver3';

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};
const snapPoints = [0, Screen.height / 2, '70%', '100%'];
const App = () => {
    onOpenBottomSheetHandler = (index) => {
        this.refs.BottomSheet.snapTo(index);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxWrapper}>
                <TouchableOpacity onPress={() => onOpenBottomSheetHandler(0)}>
                    <View style={styles.box}>
                        <Text>1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onOpenBottomSheetHandler(1)}>
                    <View style={styles.box}>
                        <Text>2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onOpenBottomSheetHandler(2)}>
                    <View style={styles.box}>
                        <Text>3</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onOpenBottomSheetHandler(3)}>
                    <View style={styles.box}>
                        <Text>4</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <BottomSheet
                bottomSheerColor="#FFFFFF"
                // backDropColor="red"
                ref="BottomSheet"
                initialPosition={'50%'}
                snapPoints={snapPoints}
                isBackDrop={true}
                isBackDropDismissByPress={true}
                isRoundBorderWithTipHeader={true}
                keyboardAware
                // isModal
                // containerStyle={{backgroundColor:"red"}}
                // tipStyle={{backgroundColor:"red"}}
                // headerStyle={{backgroundColor:"red"}}
                // bodyStyle={{backgroundColor:"red",flex:1}}
                header={
                    <View>
                        <Text style={styles.text}>Header</Text>
                    </View>
                }
                body={
                    <View style={styles.body}>
                        <Text style={styles.text}>Body</Text>
                        <TextInput style={{ width: '100%', backgroundColor: 'gray' }} />
                    </View>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    box: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    boxWrapper: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default App;