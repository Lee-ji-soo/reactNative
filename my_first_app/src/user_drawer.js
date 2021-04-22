/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from "react-native";
import PictogramHome from "./assets/pics/homeIcon.png";

class DrawerUserScreen extends Component {
  drawerStyle = () => {
    this.props.navigation.setOptions({
      drawerIcon:()=>(
        <Image
          source={PictogramHome}
          style={{
            width: 40,
            height: 40
          }}
        />
      )
    })
  }
  render(){
    this.drawerStyle();
    return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Text>User Screen hi</Text>
        <Button
          title="to Home"
          onPress={()=>{
           this.props.navigation.navigate("Home")
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default DrawerUserScreen;
