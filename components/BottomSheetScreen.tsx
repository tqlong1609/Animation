import React, { useCallback, useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, withSpring } from 'react-native-reanimated'
interface BaseControllerHandle {
    hide(): void;
    show(config: ContentConfig): void;
}

class Service {
    instance = React.createRef<BaseControllerHandle>();
    public hide() { };
    public show() { };
}

type AnimType = {
    startValue: number,
}

const service = new Service();


export const ServiceContext = React.createContext<BaseControllerHandle>(service);

const SPRING_CONFIG = {
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500
}

type ContentConfig = {
    contentView: React.ReactNode
}

const MINIMUM_END = 50

export default function BottomSheetScreen() {
    const [contentView, setContentView] = useState<React.ReactNode>(null);
    const mn = useContext(ServiceContext)
    const dimensions = useWindowDimensions()
    const top = useSharedValue<number>(dimensions.height)

    const style = useAnimatedStyle(() => {
        return {
            top: withSpring(top.value + 100, SPRING_CONFIG)
        }
    })

    const animationTop = () => {
        top.value = withSpring(dimensions.height / 2, SPRING_CONFIG)
    }

    const animationBottom = () => {
        top.value = withSpring(dimensions.height, SPRING_CONFIG)
    }

    const onShow = useCallback(
        (config: ContentConfig) => {
            const { contentView } = config
            setContentView(contentView)
            animationTop()
        },
        [],
    )

    const onHide = useCallback(
        () => {
            // setEnable(false)
            animationBottom()
        },
        [],
    )

    const _onPanGestureEvent = useAnimatedGestureHandler({
        onStart(_, context: AnimType) {
            context.startValue = top.value
        },
        onActive(event, context) {
            top.value = event.translationY + context.startValue
        },
        onEnd(event, _) {
            if (top.value > dimensions.height / 2 + MINIMUM_END) {
                top.value = dimensions.height
            } else if (top.value < dimensions.height / 2 - MINIMUM_END &&
                event.translationY < 0) {
                top.value = 0
            } else {
                top.value = dimensions.height / 2
            }
        }

    })

    useEffect(() => {
        mn.hide = onHide
        mn.show = onShow
    }, []);

    return (
        <PanGestureHandler
            onGestureEvent={_onPanGestureEvent}>
            <Animated.View style={[styles.container, style]}>
                {contentView}
            </Animated.View>
        </PanGestureHandler>
    )
}

const styles = StyleSheet.create({
    container: {
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
        backgroundColor: 'white'
    }
})
