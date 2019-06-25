import React, {Component} from 'react';
import MapViewScreen from './src/Pages/MapView';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/Pages/Home';
import MapViewPolygonScreen from './src/Pages/MapViewPolygon';
import MapViewMultiplePolygonScreen from './src/Pages/MapViewMultiplePolygon';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }, MapView: {
    screen: MapViewScreen
  }, MapViewPolygon: {
    screen: MapViewPolygonScreen
  }, MapViewMultiplePolygon: {
    screen: MapViewMultiplePolygonScreen
  }
},
{
  initialRouteName: "MapViewMultiplePolygon"
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
  render() {
    return <AppContainer />;
  }
}



