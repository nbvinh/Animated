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
const Easy = () => {
    let fadeAnim = new Animated.Value(-height)
    let fadeAnim1 = new Animated.Value(-height)
    useEffect(() => {
        const anim = Animated.timing(
            fadeAnim, {
            toValue: 0,
            duration: 1000,
            easing: Easing.bounce,
            useNativeDriver: false
        }
        );
        const anim1 = Animated.timing(
            fadeAnim1, {
            toValue: 0,
            duration: 1000,
            easing: Easing.bounce,
            useNativeDriver: false
        }
        );
        Animated.sequence([anim, anim1]).start(); // anim thuc hien xong thi anim1 thuc hien
        // Animated.stagger(200,[anim,anim1]).start(); // anim1 thuc hien sau anim 0.2s
        // Animated.parallel([anim,anim1]).start();  // 2 thang cung thuc hien
    }, [])

    const marginLeft = fadeAnim
    const marginLeft1 = fadeAnim1
    return (
        <View>
            <Animated.View
                style={{
                    height: 250,
                    width: 300,
                    backgroundColor: 'yellow',
                    marginLeft,

                }}>
                <Text>kshdfis</Text>
            </Animated.View>
            <Animated.View
                style={{
                    height: 250,
                    width: 300,
                    backgroundColor: 'yellow',
                    marginLeft: marginLeft1,
                    marginTop: 10
                }}>
                <Text>kshdfis</Text>
            </Animated.View>
        </View>
    )
}

export default Easy;