import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./src/img/weather-icon.png')} style={styles.appIcon}/>
      <Text style={styles.text}>myWeatherApp</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2226',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 30,
    color: '#F29F05'
  },
  appIcon: {
    width: 250,
    height: 250
  }
});
