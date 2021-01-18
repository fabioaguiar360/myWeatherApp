import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FeelsLike from './src/components/feelsLike';
import Home from './src/components/home';
import Wind from './src/components/wind';
import Humidity from './src/components/humidity';
import Visibility from './src/components/visibility';

export default function App() {
 const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={'Home'} component={Home} />
        <Drawer.Screen name={'FeelsLike'} component={FeelsLike} />
        <Drawer.Screen name={'Wind'} component={Wind} />
        <Drawer.Screen name={'Humidity'} component={Humidity} />
        <Drawer.Screen name={'Visibility'} component={Visibility} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
