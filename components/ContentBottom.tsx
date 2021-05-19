import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function ContentBottom() {
    return (
        <TouchableOpacity style={styles.btnClick}>
            <Text>ContentBottom</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnClick: {
        width: '100%',
        height: 100,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
