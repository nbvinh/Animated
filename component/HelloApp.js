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
    Easing,
    Image,
    ImageBackground

} from 'react-native';
const { width, height } = Dimensions.get('window');
const HelloApp = (props) => {
    let time = new Animated.Value(0)
    useEffect(() => {
        Animated.timing(time, {
            toValue: 2,
            duration: 2000,
            useNativeDriver: false,
        }).start();
    }, [])
    const marginTop = time.interpolate({
        inputRange: [0, 1,2],
        outputRange: [-100, 100,100]
    });
    const marginLeft = time.interpolate({
        inputRange: [0, 1,2],
        outputRange: [-10000, -800,0]
    });
    return (
        <View>
            <ImageBackground
                style={{
                    width: width,
                    height: height,
                    alignItems: 'center',
                }}
                source={require('../media/background.png')}
            >
                <Animated.Image
                    style={{ resizeMode: 'center',marginTop }}
                    source={require('../media/logo.png')}
                />
                <Animated.Text style={{
                    fontSize: 30,
                    backgroundColor: 'transparent',
                    marginTop: 300,
                    color: 'white',
                    marginLeft
                }}
                >KHOA PHAM TRAINING</Animated.Text>
            </ImageBackground>

        </View >
    )
}

export default HelloApp;