import React, { Profiler } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
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
            justifyContent:'center',
        },
        labelStyle:{
            fontSize: 15
        }
      }}>
        <Tab.Screen name='Home' exact path='\' component={home}/>
        <Tab.Screen name='Profile' component={profile}/>
        <Tab.Screen name='Tours' component={tours}/>
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