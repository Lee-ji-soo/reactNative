/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from "react-native";

class DrawerHomeScreen extends Component {
  render(){
    return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Text>Home Screen</Text>
        <Button
          title="to User"
          onPress={()=>{
           this.props.navigation.navigate("User")
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default DrawerHomeScreen;
