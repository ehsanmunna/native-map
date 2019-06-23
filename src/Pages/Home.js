
import React, {Component} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
    Button: {
        margin: 10, padding: 10
    }
    , grid: {
        //border: 1,
        width: '50%',
        //backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc'
    }
});

export default class HomeScreen extends Component{

    static navigationOptions = {
        title: 'Map Home',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.grid} onPress={() => navigate('MapView')}>
                        <Text>Map View</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.grid} onPress={() => navigate('MapViewPolygon')}>
                        <Text>Polygon</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.grid}>
                        <Text>Text</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.grid}>
                        <Text>Text</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}