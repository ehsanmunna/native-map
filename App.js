import React, {Component} from 'react';
import MapViewScreen from './src/Pages/MapView';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/Pages/Home';
import MapViewPolygonScreen from './src/Pages/MapViewPolygon';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }, MapView: {
    screen: MapViewScreen
  }, MapViewPolygon: {
    screen: MapViewPolygonScreen
  }
},
{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
  render() {
    return <AppContainer />;
  }
}



