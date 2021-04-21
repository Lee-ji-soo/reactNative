/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{ Component } from 'react';
import { TextInput, Button, View, Text, StyleSheet, ScrollView, Image} from "react-native";
import Header from "./src/header";
import Generator from "./src/generator";
import NumList from "./src/numlist";
import Input from "./src/input";
import Picker from "./src/picker";
import Pic from "./assets/images/pic.png";
import Modal from "./src/modal";
class App extends Component {
  state = {
    appName: "My First App",
    random: [45, 122]
  }
  state ={
    myInputTxt:"",
    alphabet:['a','b','c'],
  }

  onChangeInput = e => {
    this.setState({
      myInputTxt: e
    })
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100)+1;
    this.setState(prevState=>{
      return {random: [...prevState.random, randomNum]}
    })
  }

  onNumDelete = position => {
    const newArr =  this.state.random.filter((num, idx)=>{
      return position !== idx;
    })
    this.setState({
      random: newArr
    })
  }

  onAddTextInput = () => {
    this.setState(prevState=>{
      return{
        myInputTxt: "",
        alphabet:[...prevState.alphabet, prevState.myInputTxt]
      }
    })
  }

  render(){
    return (
      <ScrollView style={styles.mainView}>
        <Modal/>
        <Image 
          style={styles.image}
          resizeMode="contain"
          source={Pic}
        />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{uri:"https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"}}
          onLoadEnd={()=>{alert("image loaded")}}
        />
        <Picker/>
        {/* <Header name={this.state.appName}/>
        <View>
          <Text
            style={styles.mainText}
            onPress={()=>alert("hi")}
          >
            Hello world
          </Text>
        </View>
        <Generator add={this.onAddRandomNum}/>
        <ScrollView
          style={{width:"100%"}}
          // onMomentumScrollBegin={()=>{alert("begin")}}
          // onMomentumScrollEnd={()=>{alert("end")}}
          // onScroll={()=>{alert("scroll")}}
          // onContentSizeChange={(width, height)=>alert(height)}
          // bounces={true}
        >
          <NumList 
            num={this.state.random}
            delete={this.onNumDelete}
          />
        </ScrollView> */}
        <TextInput
          value={this.state.myInputTxt}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={true}
          maxLength={100}
          autoCapitalize={"none"}
          // editable={false}
        />
        <Button
          title="Add Input Text"
          onPress={this.onAddTextInput}
        />
        <ScrollView style={{width:"100%"}}>
          {
            this.state.alphabet.map((item,idx)=>{
            return <Text key={`alphabet${idx}`} style={styles.mainText}>{item}</Text>
            })
          }
        </ScrollView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  mainView:{
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50
  },
  subView:{
    backgroundColor: "yellow",
    marginBottom: 10,
  },
  anotherSubView:{
    backgroundColor: "yellow",
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  mainText:{
    fontSize: 20,
    fontWeight: "normal",
    color: "red",
    padding: 20,
    margin: 20,
    backgroundColor: "pink",
  },
  input:{
    width: "100%",
    backgroundColor: "#cecece",
    marginTop: 20,
    fontSize: 25,
    padding: 10
  },
  image:{
    width: "100%",
    height: 300,
  }
})

export default App;
