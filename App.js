import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// Aqui tenho que importar o provider do Api pra englobar toda a aplicação 
// e passar para os filhos os estados criados no contexto da Api
import ApiProvider from '././src/context/apiContext';
import FeelsLike from './src/components/feelsLike';
import Home from './src/components/home';
import Wind from './src/components/wind';
import Humidity from './src/components/humidity';
import Visibility from './src/components/visibility';

export default function App() {
 const Drawer = createDrawerNavigator();
  return (
    <ApiProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          
            <Drawer.Screen name={'Home'} component={Home} />
            <Drawer.Screen name={'FeelsLike'} component={FeelsLike} />
            <Drawer.Screen name={'Wind'} component={Wind} />
            <Drawer.Screen name={'Humidity'} component={Humidity} />
            <Drawer.Screen name={'Visibility'} component={Visibility} />
          
        </Drawer.Navigator>
      </NavigationContainer>
    </ApiProvider>
  );
}
