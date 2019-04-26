import React from 'react';
import { DrawerNavigator, StackNavigator, DrawerItems, NavigationActions } from 'react-navigation'; //app's navigation stack
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';
import MatchScreen from './screens/match.screen';
import PostScreen from './screens/post.screen';
import {ScrollView } from 'react-native';
import {
  Button,
  Icon
} from 'native-base';

const hiddenItems = [
  'Splash',
  'Login'
];

const SideBar = (props) => {
  const propsClone = {
    ...props,
    items: props.items.filter(item => !hiddenItems.includes(item.key))
  }
  return (
    <ScrollView>
      <DrawerItems {...propsClone}/>
    </ScrollView>
  )
}

const MenuButton = ({navigate}) => (
  <Button transparent 
    onPress={() => {
      navigate('DrawerOpen')
    }}>
    <Icon style={{color: "#fff"}} size={28} name="menu"/>
  </Button>
)
//configuration for this route of splash screen
const Splash = {
  screen: SplashScreen,
  navigationOptions: {
    header: null
  }
}
//configuration for the route of login screen
const Login = {
  screen: LoginScreen,
  navigationOptions: {
    header: null
  }
}
const Match = {
  screen: MatchScreen,
  navigationOptions: {
    headerMode: 'screen',
    headerTitle: 'Matches',
    drawerLabel: 'Matches'
  }
}
const Post = {
  screen: PostScreen,
  navigationOptions: {
    headerMode: 'screen',
    headerTitle: 'Post'
  }
}
//similar to drawerNavigator
const MatchStack = StackNavigator({
  Match: Match,
  Post: Post
},{
  navigationOptions: ({navigation, HeaderProps}) => ({
    headerLeft: <MenuButton navigate={navigation.navigate}/>,
    headerStyle: { backgroundColor: "#000"},
    headerTintColor: "#fff"
  }) 
})
//configurations
const RouteConfig = {
  initialRoute: 'Splash',
  contentComponent: SideBar,
  navigationOptions: {
    gesturesEnabled: false
  }
}
//drawerNavigator will take route mapping that is different screens of our app; as well as take a route config
const AppNavigator = DrawerNavigator({
  Splash: Splash, //first part of our app the user will see is splashscreen; new route added here
  Login: Login,
  Match: {screen: MatchStack} //created another config in line for Match
},RouteConfig)

export default AppNavigator; //sets up a basic shell for our navigation