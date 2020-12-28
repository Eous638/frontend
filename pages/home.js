import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
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