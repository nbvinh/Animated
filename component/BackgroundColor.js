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
const height = Dimensions.get('screen').height
const BackgroundColor = () => {
    let colorAim = new Animated.Value(0)
    useEffect(() => {
        const anim1 = Animated.timing(colorAim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        })
        const anim2 = Animated.timing(colorAim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        })
        const finalAnim = Animated.sequence([anim1, anim2]);
        Animated.loop(finalAnim).start();
    }, [])
    const backgroundColor = colorAim.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['green', 'red', 'yellow']
    })
    return (
        <Animated.View
            style={{
                height: 250,
                width: 300,
                backgroundColor,
            }}>
            <Text>kshdfis</Text>
        </Animated.View>
    )
}

export default BackgroundColor;