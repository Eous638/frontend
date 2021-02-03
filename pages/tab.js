import React, { Profiler } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import home from './home'
import about from './about'
import tours from './tours'
import locations from './locations'
import profile from './profile'

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
    return <Tab.Navigator initialRouteName='home' tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'black',
        tabStyle:{
            borderColor:'##ebebeb',
            borderLeftWidth:0.5,
            borderRightWidth:0.5,
            justifyContent:'center',
        },
        labelStyle:{
            fontSize: 15
        }
      }}>
        <Tab.Screen name='Profile' component={profile}/>
        <Tab.Screen name='Tours' component={tours}/>
        <Tab.Screen name='Home' component={home}/>
        <Tab.Screen name='Locations' component={locations}/>
        <Tab.Screen name='About' component={about}/>
    </Tab.Navigator>
}

const styles = StyleSheet.create({
    tabs:{
        backgroundColor: 'black'
    }
})

export default TabNavigator;