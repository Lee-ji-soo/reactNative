/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React,{ Component } from 'react';
import { View, Text, Button, StyleSheet } from "react-native";

class HomeScreen extends Component {
  render(){
    return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Text>Home Screen</Text>
        <Button
          title= "To User"
          onPress={()=>this.props.navigation.navigate("User",{
            userIdx:1,
            userName:"soo",
            userFirstName: "lee"
          })}
        />
        <Button
          title="Change the title"
          onPress={()=>
            this.props.navigation.setOptions({
              title:"Changed",
              headerStyle:{
                backgroundColor: "pink",
              },
              headerTintColor:"red"
          })
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default HomeScreen;
