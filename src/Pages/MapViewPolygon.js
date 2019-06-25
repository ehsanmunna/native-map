
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Polygon} from "react-native-maps";

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
  
  export default class MapViewPolygonScreen extends Component{

    static navigationOptions = {
        title: 'Map View Polygon',
    };
    
    state = {
      nCord: [],
      region: {
        latitude: 23.737491688954222, 
        longitude: 90.38608169183135,
        latitudeDelta: 0.07257755845785141,
        longitudeDelta: 0.048720673419413885,
      },
      coordinates: [
            { latitude: 23.756799, longitude: 90.368535 },
            { latitude: 23.754131, longitude: 90.390112 }, 
            { latitude: 23.740538, longitude: 90.389957 },
            { latitude: 23.741567, longitude: 90.369544 }
      ]
    }
  
    // mapPressed = (event) =>{
    //     let e = event.nativeEvent.coordinate
    //     this.state.nCord.push(e);
    //     console.log(e)
    //     let obj = Object.assign([], this.state.nCord, this.state.coordinates);
    //     this.setState({coordinates: obj})
    //     console.log('object : ', obj)
    //     console.log('state : ', this.state.coordinates)
    // //   this.setState({region: e})
    // }
   
    render() {
      return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.container}>
            <MapView
              style={styles.map}
              region={this.state.region}
              // onPress={ (event) => this.mapPressed(event) }
            >
                {
                    this.state.coordinates.length > 0
                    ? <Polygon
                    coordinates={this.state.coordinates}
                    strokeColor="#000"
                    fillColor="rgba(255, 0, 38, 0.2)"
                    strokeWidth={3}
                    />
                    : null
                }
            </MapView>
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