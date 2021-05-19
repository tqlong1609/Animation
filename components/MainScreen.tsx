import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ServiceContext } from './BottomSheetScreen'
import ContentBottom from './ContentBottom'
import ContentBottom2 from './ContentBottom2'
export default function MainScreen() {
    const mn2 = useContext(ServiceContext)
    const _onOpen = () => {
        mn2.show({
            contentView: ContentBottom
        })
    }

    const _onClose = () => {
        mn2.hide()
    }

    const _onOpen2 = () => {
        mn2.show({
            contentView: ContentBottom2
        })
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'gray' }}>
            <Text>MainScreen</Text>
            <TouchableOpacity style={styles.btnSheet}
                onPress={_onOpen}
            >
                <Text>Click Open 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSheet}
                onPress={_onOpen2}
            >
                <Text>Click Open 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSheet}
                onPress={_onClose}
            >
                <Text>Click Close</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnSheet: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    }
})
