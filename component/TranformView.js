import React, { useEffect, useState } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    View,
    Animated,
    Dimensions,
    Easing
} from 'react-native';
const TranformView = (props) => {
    let tranform = new Animated.Value(0)
    useEffect(() => {
        const anim1 = Animated.timing(tranform, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        })
        const anim2 = Animated.timing(tranform, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        })
        const finalAnim = Animated.sequence([anim1, anim2]);
        Animated.loop(finalAnim).start();
    }, [])
    const rotate = tranform.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['15deg', '0deg', '-15deg']
    })
    return (
        <Animated.View
            style={{
                height: 250,
                width: 300,
                transform: [{ rotateX: rotate }],
                ...props.style
            }}>
            {props.children}
        </Animated.View>
    )
}

export default TranformView;