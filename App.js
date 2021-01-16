import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeelsLike from './src/components/feelsLike';
import Home from './src/components/home';

export default function App() {
 const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name={'Home'} component={Home} options={{ title: 'Local Temperature', headerStyle: {
            backgroundColor: '#1F2226',
          },
          headerTintColor: '#fff',}} />
        <Stack.Screen name={'FeelsLike'} component={FeelsLike}  options={{ title: 'Feels Like Temperature', headerStyle: {
            backgroundColor: '#1F2226',
          },
          headerTintColor: '#fff',}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

