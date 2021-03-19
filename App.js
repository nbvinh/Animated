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
import Easy from "./component/Easy";
import BackgroundColor from "./component/BackgroundColor";
import TranformView from "./component/TranformView";
import HelloApp from "./component/HelloApp";
import ResponseView from "./component/ResponseView";
const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      // alignItems: 'center',
      alignItems: 'stretch',
      backgroundColor: 'lightblue'
    }}>
      {/* <TranformView style={{backgroundColor:'green'}}>
        <Text>Truong Anh Vinh</Text>
      </TranformView>
      <TranformView style={{backgroundColor:'yellow',height: 200}}>
        <Text>Truong Anh Vinh2</Text>
      </TranformView> 
      <HelloApp/>
      */}
      <ResponseView />
    </View>
  )
}

// Để ẩn backgroundColor của bất kì thì sử dụng backgroundColor: 'transparent'

export default App;