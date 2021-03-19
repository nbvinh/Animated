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
const { height, width } = Dimensions.get('screen')
const ResponseView = () => {
    useEffect(() => {

    }, [])
    const [local,setLocal]= useState({ x:null,y:null})
    const onPresss = (evt) => {
        const { locationX, locationY } = evt.nativeEvent;
        console.log(local)
    }
    return (
        <View
            onStartShouldSetResponder={() => true}
            onMoveShouldSetResponder={() => true}
            onResponderGrant={(evt) => onPresss(evt)}
            style={{
                flex: 1,
                backgroundColor: 'yellow'
            }}>
        </View>
    )
}

export default ResponseView;