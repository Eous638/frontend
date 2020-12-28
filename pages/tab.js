import React, { Profiler } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import home from './home'
import about from './about'
import tours from './tours'
import profile from './profile'
import locations from './locations'

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
    return <Tab.Navigator>
        <Tab.Screen name='home' component={home}/>
        <Tab.Screen name='profile' component={profile}/>
        <Tab.Screen name='tours' component={tours}/>
        <Tab.Screen name='search' component={locations}/>
        <Tab.Screen name='about' component={about}/>
    </Tab.Navigator>
}

export default TabNavigator;