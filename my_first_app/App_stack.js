/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React,{ Component } from 'react';
import { StyleSheet, Image, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./src/home";
import UserScreen from "./src/user";
import LogoTitle from "./src/logo";
import DrawerHomeScreen from "./src/home_drawer";
import DrawerUserScreen from "./src/user_drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ // 모든 스크린에 적용
            headerStyle:{
              backgroundColor: "#dbdbdb",
            },
            headerTitleStyle:{
              fontWeight: "bold",
              color: "#111"
            },
            headerTintColor: "white",
           }}
        >
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{
              title: "Home Screen",
              headerTitle: <LogoTitle/>,
              headerRight: () => (
              <Button 
                title= "info"
                onPress= {()=>{alert("i am button")}}
                color= "black"
              />
              )
          }}
          />
          <Stack.Screen 
            name="User"
            component={UserScreen}
            initialParams={{
              userIdx:10,
              userName:"suki",
              userFirstName: "lee"
            }}
            options={{ // 모든 스크린에 적용
              headerStyle:{
                backgroundColor: "green",
              },
              headerTitleStyle:{
                fontWeight: "bold",
                color: "white"
              }
             }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})

export default App;
