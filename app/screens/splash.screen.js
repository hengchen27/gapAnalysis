import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { inject } from 'mobx-react'; //the pieces to work with Provider

@inject("stores") //name of the store that we want to inject
export default class SplashScreen extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const {stores, navigation } = this.props;
    setTimeout(() => {
      navigation.navigate("Login") //leave the splash screen and go to the login screen
    }, stores.config.SplashTime)
  }
  render() {
    const { stores } = this.props
    return (
      <View style={{flex: 1}}>
        <Image style={{flex: 1, width: null, height: null}} source={stores.config.SplashImg}/> //take as much screen as possible
      </View>
    )
  }
}