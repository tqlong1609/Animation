import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ContentBottom2() {
    return (
        <View style={styles.contain}>
            <Text>ContentBottom2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        width: '100%',
        height: 100,
        backgroundColor: 'blue'
    }
})
