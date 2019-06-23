
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from "react-native-maps";

const styles = StyleSheet.create({
    container: {
      //...StyleSheet.absoluteFillObject,
      height: 400,
      width: '100%',
      // justifyContent: 'flex-end',
      // alignItems: 'center',
      flex: 1
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
  
  export default class MapViewScreen extends Component{

    static navigationOptions = {
        title: 'Map View',
    };
    
    state = {
      region: {
        latitude: 23.737491688954222, 
        longitude: 90.38608169183135,
        latitudeDelta: 0.07257755845785141,
        longitudeDelta: 0.048720673419413885,
      }
    }
  
    _onRegionChange = (e) =>{
      console.log(e)
      this.setState({region: e})
    }
   
    render() {
      return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.container}>
            <MapView
            style={styles.map}
              region={this.state.region}
              onRegionChange={(e)=> this._onRegionChange(e) }
            />
          </View> 
            <View style={{flex: 1}}>
              <Text>Latitude: {this.state.region.latitude}</Text>
              <Text>Longitude: {this.state.region.longitude}</Text>
              <Text>Latitude Delta: {this.state.region.latitudeDelta}</Text>
              <Text>Longitude Delta: {this.state.region.longitudeDelta}</Text>
            </View>
          
        </View>
      );
    }
  }