import React, {Component} from 'react'
import {
  Container,
  Content,
  Icon,
  Button
} from 'native-base';
import {inject} from 'mobx-react';
import Match from '../components/match.component';

@inject("stores")
export default class MatchScreen extends Component {
  constructor(props) {
    super(props);
  }
  //create a static function to tell navigation to
  //add a button with camera icon on the right of header section, clicked to navigate to post screen
  static navigationOptions = ({navigation}) => ({
    headerRight: <Button transparent
      onPress={() => navigation.navigate('Post')}> 
        <Icon name='camera' style={{color: "#fff"}} size={28}/>
      </Button>
  })
  render() {
    return (
      //disable the scroll view of content
      <Container>
        <Content scrollEnabled={false} style={{backgroundColor:"#858585"}}>
          <Match stores={this.props.stores}/>
        </Content>
      </Container>
    )
  }
}