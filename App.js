import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FeelsLike from './src/components/feelsLike';
import Home from './src/components/home';

export default function App() {
 const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name={'Home'} component={Home} />
        <Drawer.Screen name={'FeelsLike'} component={FeelsLike} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

