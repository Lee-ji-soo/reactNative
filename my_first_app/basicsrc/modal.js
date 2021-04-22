/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, Modal} from "react-native";


class ModalComponent extends Component{
  state={
    modal: false
  }

  handleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render(){
    return(
      <View style={{width:"100%"}}>
        <Button
          title="Open Modal"
          onPress={this.handleModal}
          />
        <Modal
          visible={this.state.modal}
          animationType={"slide"}
          onShow={()=>{alert("modal show")}}
        >
          <View style={{marginTop:60, backgroundColor:"red"}}>
            <Text>This is Modal Content</Text>
            <Button
              title="Close Modal"
              onPress={this.handleModal}
            />
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})

export default ModalComponent;
