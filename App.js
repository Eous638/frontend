import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './pages/tab.js'

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}