
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import MapView, {Polygon} from "react-native-maps";
import { LatLangData, InitialRegion } from '../Services/myCord';
import { GetCordination } from '../Services/LatLongMatch';

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

   const CurrentLocation = {
    latitude: null, longitude: null
  }
  
  export default class MapViewMultiplePolygonScreen extends Component{

    static navigationOptions = {
        title: 'Map View Polygon',
    };
    
    state = {
      region: InitialRegion,
      Polygons: LatLangData,
      currentregion: CurrentLocation

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
           //console.log('my current position is: ', position);
           const updatedLocation = Object.assign({}, InitialRegion, {latitude: position.coords.latitude, longitude: position.coords.longitude });
           //console.log('my current position is updated: ', updatedLocation);
            this.setState({region: updatedLocation })
         }, (err) => {
           console.log('position error ', err)
         }
       );
     }

     onPressGetLocation(){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // const updatedLocation = Object.assign({}, CurrentLocation, {latitude: position.coords.latitude, longitude: position.coords.longitude });
          const updatedLocation = Object.assign({}, CurrentLocation, {latitude: 23.723248, longitude: 90.380803 });
          console.log('sssss',updatedLocation)
          this.setState({currentregion : updatedLocation })
        }, (err) => {
          console.log('position error ', err)
        }
      );
    }

    mapPressed(event){
      const currentCord = event.nativeEvent.coordinate;
      console.log(LatLangData.length)
        let isMatched = false;
        // LatLangData.forEach(elem => {
        //   console.log(Object.assign([], elem.coordinates))
        // })
        LatLangData.map(item =>{
          console.log(JSON.stringify(item.coordinates))
          console.log(GetCordination(JSON.stringify(item.coordinates), currentCord))
        })
        // for (let index = 0; index < LatLangData.length; index++) {
        // //     const element = LatLangData[index];
        // //     const cord = JSON.stringify(element.coordinates);
        //     isMatched = GetCordination(LatLangData[index].coordinates, currentCord);
        //     // if (isMatched) {
        //     //   break;  
        //     // }
        //     //console.log(isMatched);
        // }


        if (isMatched) {
          console.log('in your polygon');
        } else {
          console.log('outside of your polygon');
        }
    }

    // PoligonPressed(){
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       console.log('position is :', position);
    //     }, (err) => {
    //       console.log('position error ', err)
    //     }
    //   );
    // }
     
   
    render() {
      return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.container}>
            
            <MapView
              style={styles.map}
              region={this.state.region}
              onPress={ (event) => {this.mapPressed(event)} }
            >
              {
                this.state.Polygons.map((item)=>{
                  return(
                    <Polygon
                    key={item.label}
                    // onPress={() => this.PoligonPressed()}
                    coordinates={item.coordinates}
                    strokeColor="#000"
                    fillColor="rgba(255, 0, 38, 0.2)"
                    strokeWidth={1}
                    />
                  )
                })
              }
                
                
            </MapView>
          </View> 
            <View style={{flex: 1}}>
              <Text>Latitude: {this.state.currentregion.latitude}</Text>
              <Text>Longitude: {this.state.currentregion.longitude}</Text>
              
            </View>

            <View style={{flex: 1}}>
            <Button
              onPress={()=> {this.onPressGetLocation()}}
              title="Current Location"
              color="#841584"
            />
            </View>
          
        </View>
      );
    }
  }