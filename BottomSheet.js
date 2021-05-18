import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Animated, useWindowDimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler'
import { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated'
const SPRING_CONFIG = {
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500
}

export default function BottomSheet() {
    const gestureHandle = useAnimatedGestureHandler({
        onActive(event) {
            console.log("123456");
            // top.value = event.translationY
        },
    })
    const dimensions = useWindowDimensions()

    const top = useSharedValue(dimensions.height)

    const style = useAnimatedStyle(() => {
        return {
            top: top.value
        }
    })

    const pressButton = () => {
        top.value = withSpring(dimensions.height / 2, SPRING_CONFIG)
    }

    const _onPanGestureEvent = Animated.event([gestureHandle], { useNativeDriver: false });
    console.log("123");
    return (
        <View style={styles.container}>
            <Button
                title="Open Sheet"
                onPress={pressButton}
            />
            <PanGestureHandler
                onGestureEvent={_onPanGestureEvent}>
                <Animated.View
                    style={
                        [{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            padding: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'red'
                        }, style]
                    }>
                    <Text>Sheet</Text>
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
