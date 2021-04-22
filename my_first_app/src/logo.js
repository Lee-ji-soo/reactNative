/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React,{ Component } from 'react';
import { Image } from "react-native";

class LogoTitle extends Component {
  render(){
    return (
      <Image
        style={{width:40, height:40}}
        source={require("./assets/pics/homeIcon.png")}
      />
    )
  }
}

export default LogoTitle;
