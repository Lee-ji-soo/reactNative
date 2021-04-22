/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Logo from "./assets/pics/homeIcon.png"
import { CommonActions } from "@react-navigation/native";

class SlideDrawer extends Component {

  navigateToScreen = (route) => () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {},
      })
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.imageContainer}>
              <Image 
                style={{
                  width: 40,
                  height: 40
                }}
                source={Logo}
              />
            </View>
            <Text style={styles.sectionHeading}>Section 1</Text>
            <View style={styles.navSectionStyle}>
              <Text 
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Home")}
              >
               Home
              </Text>
              <Text 
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("User")}
              >
               User
              </Text>
              <Text 
                style={styles.navItemStyle}
                onPress={()=>{alert("Heol Window")}}
              >
               Help
              </Text>
              <Text 
                style={styles.navItemStyle}
                onPress={()=>{alert("Info")}}
              >
               Info
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{paddingLeft:10, paddingBottom:30}}>
          <Text>Copyright @Window, 2002</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 80
  },
  imageContainer:{
    alignItems:"center",
    padding:50, 
  },
  sectionHeading:{
    color: "white",
    backgroundColor: "#ef9de4",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: "bold"
  },
  navSectionStyle:{
    backgroundColor: "#04b6ff"
  },
  navItemStyle:{
    padding: 10,
    color:"#fff"
  }

})

export default SlideDrawer;
