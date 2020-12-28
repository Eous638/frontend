import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps';

const home = () => {
    return (
        <MapView style={styles.container}
            initialRegion={{
            latitude: 44.7866,
            longitude: 20.4489,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
         />
        
    )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3'
    }
})

export default home;