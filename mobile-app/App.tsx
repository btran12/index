import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MapScreen } from './src/screens/MapScreen';
import { NearbyFeedScreen } from './src/screens/NearbyFeedScreen';
import { CheckInScreen } from './src/screens/CheckInScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Nearby" component={NearbyFeedScreen} />
        <Tab.Screen name="Checked-In" component={CheckInScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
