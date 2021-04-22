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

class UserScreen extends Component {

  headerStyle= () =>{
    this.props.navigation.setOptions({
        title: "Customizing",
        headerStyle:{
          backgroundColor: "blue",
        },
        headerTitleStyle:{
          fontWeight: "bold",
          color: "white"
        },
        headerBackTitle: "BACK",
        headerRight: () => (
          <Button
            title= "go home"
            onPress= {()=>{this.props.navigation.navigate("Home")}}
            color= "white"
          />
        )
    })
  }

  render(){
    this.headerStyle();
    const { params } = this.props.route;
    const userIdx = params ? params.userIdx : null;
    const userName = params ? params.userName : null;
    const userFirstName = params ? params.userFirstName : null;

    return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Text>User Screen</Text>
        <Button
          title="to Home"
          onPress={()=>{
           this.props.navigation.navigate("Home")
          }}
        />
        <Text>userIdx : {userIdx}</Text>
        <Text>userName : {userName}</Text>
        <Text>userFirstName : {userFirstName}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default UserScreen;
