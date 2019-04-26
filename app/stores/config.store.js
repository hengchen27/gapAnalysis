import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCqyJRuU4t07NN57cuBMJCfg6T1RJsajzQ",
  authDomain: "dinder-3ddcb.firebaseapp.com",
  databaseURL: "https://dinder-3ddcb.firebaseio.com",
  projectId: "dinder-3ddcb",
  storageBucket: "dinder-3ddcb.appspot.com",
  messagingSenderId: "51683566972"
};




export default class ConfigStore {
  constructor() {
    firebase.initializeApp(config) //added firebase
    this.splashTime = 1000 //splash screen rendering time
    this.splashImg = require('../../images/splash.jpg')
    this.loginBG = require('../../images/login.jpg')
  }
  //access methods
  get SplashImg() {
    return this.splashImg
  }
  get SplashTime() {
    return this.splashTime
  }
  get LoginBG() {
    return this.loginBG
  }
}