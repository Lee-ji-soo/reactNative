/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Header = (props) => {
  return(
    <TouchableOpacity
      style={styles.header}
      // onPress={()=>alert("hellow World")}
      // onLongPress={()=>alert("hellow")}
      // onPressIn={()=>alert("hellow")} // 손을 데는 순간
      // onPressOut={()=>alert("hellow word")} // 손을 뗴는 순간
    >
      <View>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "pink",
    alignItems: "center",
    padding: 5,
    width: "100%"
  }
})

export default Header;
