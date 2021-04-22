/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React,{ Component } from 'react';
import { StyleSheet, Image, Linking} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";
import DrawerHomeScreen from "./src/home_drawer";
import DrawerUserScreen from "./src/user_drawer";
import LogoTitle from "./src/logo";
import PictogramHome from "./src/assets/pics/homeIcon.png";
import SlideDrawer from "./src/my_drawer";

const Drawer = createDrawerNavigator();

CustomDrawerContent = (props) => {
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem
        label="Help"
        onPress={()=>Linking.openURL("http://www.google.com")}
      />
       <DrawerItem
        label="Info"
        onPress={()=>alert("info")}
      />
    </DrawerContentScrollView>
  )
} 
class App extends Component {

  render(){
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerType="front"
          drawerPosition="left" 
          drawerStyle={{
            backgroundColor: "#c6cbef",
            width: 200,
          }}
          drawerContentOptions={{
            activeTintColor: "blue",
            activeBackgroundColor: "skyblue"
          }}
          drawerContent={(props)=><SlideDrawer {...props}/>}
          // drawerContent={(props)=><CustomDrawerContent {...props}/>}
          // drawerContent={(props)=><CustomDrawerContent {...props}/>}
          // drawerType="slide"
          // drawerType="permanent"
        >
          <Drawer.Screen
            name="Home"
            component={DrawerHomeScreen}
            options={{
              drawerIcon:()=>(
              <Image
                source={PictogramHome}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
              )
            }}
          />
          <Drawer.Screen
            name="User"
            component={DrawerUserScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})

export default App;
