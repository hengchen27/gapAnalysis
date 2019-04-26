import {observable, action} from 'mobx';
import firebase from 'firebase';

export default class AuthStore {
  @observable authUser = null;

  constructor() {
    //update the user and re-render
    firebase.auth().onAuthStateChanged((user) => {
      this.authUser = user
    })
  }
  @action
  //send data to db and change the state of an authenticated user
  signIn({email, password}) {
    if(this.authUser) {
      return Promise.resolve(this.authUser)
    }
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }
}