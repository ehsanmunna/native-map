
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Polygon} from "react-native-maps";
import { LatLangData, CurrentRegion } from '../Services/myCord';

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
  
  export default class MapViewMultiplePolygonScreen extends Component{

    static navigationOptions = {
        title: 'Map View Polygon',
    };
    
    state = {
      region: CurrentRegion,
      Polygons: LatLangData
      // Polygons: [
      //   {
      //     label: 'label 1',
      //     // coordinates: [
      //     //   { latitude: 23.756799, longitude: 90.368535 },
      //     //   { latitude: 23.754131, longitude: 90.390112 }, 
      //     //   { latitude: 23.740538, longitude: 90.389957 },
      //     //   { latitude: 23.741567, longitude: 90.369544 }
      //     // ]
      //   }
      // ]
    }

    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
         (position) => {
           console.log('my current position is: ',position);
           const updatedLocation = Object.assign({}, CurrentRegion, {latitude: position.coords.latitude, longitude: position.coords.longitude });
            this.setState({region: updatedLocation })
         }, (err) => {
           console.log('position error ', err)
         }
       );
     }
   
    render() {
      return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.container}>
            
            <MapView
              style={styles.map}
              initialRegion={this.state.region}
              // onPress={ (event) => this.mapPressed(event) }
            >
              {
                this.state.Polygons.map((item)=>{
                  return(
                    <Polygon
                    coordinates={item.coordinates}
                    strokeColor="#000"
                    fillColor="rgba(255, 0, 38, 0.2)"
                    strokeWidth={3}
                    />
                  )
                })
              }
                
                
            </MapView>
          </View> 
            <View style={{flex: 1}}>
              <Text>Latitude: {this.state.region.latitude}</Text>
              <Text>Longitude: {this.state.region.longitude}</Text>
              <Text>Latitude Delta: {this.state.region.latitudeDelta}</Text>
              <Text>Longitude Delta: {this.state.region.longitudeDelta}</Text>
              {/* {
                this.state.Polygons.map(e=>{
                  // console.log(e.label)
                  return(
                    <View>
                      <Text>Label: {e.label}</Text>
                      {
                        
                        e.coordinates.map(c=>{
                          return(<Text>{c.latitude}</Text>)
                        })
                      
                      }
                    </View>
                  )
                })
              } */}
            </View>
          
        </View>
      );
    }
  }