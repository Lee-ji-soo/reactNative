/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{ Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
class App extends Component {
  render(){
    return (
      <View style={styles.mainView}>
        <Text>hellow word</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView:{
    flex: 1,
    backgroundColor: "green",
    // height: "100%",
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
  }
})

export default App;
