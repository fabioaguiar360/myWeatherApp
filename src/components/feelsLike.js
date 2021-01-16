import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import weatherApi from '../services/weatherApi';
import SpotlightBoxes from './spotlighBoxes';

export default function FeelsLike( props ) {
  const [weatherData, setWeatherData] = useState([]);
  const [main, setMain] = useState({}); 

 async function getData(){
   await weatherApi.get().then((data) => {
        setWeatherData(data.data);
        setMain(data.data.main);
    });
  }

  useEffect(() => {
    getData();
  },[]);

  
  return (
    <View style={styles.container}>
      <View style={styles.spotlightView}>
        <Text style={styles.spotlightText}>{main.feels_like}º</Text>
      </View>
      <Text style={styles.text}>{weatherData.name}</Text>
      <Text style={styles.infoText}>Feels like Temperature</Text>
      <View style={styles.boxes}>
        <TouchableOpacity onPress={() => props.navigation.navigate('FeelsLike')}>
          <SpotlightBoxes
            name={'FL'} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <SpotlightBoxes
            name={'Home'} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('FeelsLike')}>
          <SpotlightBoxes
            name={'Wind'} 
          />
        </TouchableOpacity>
        
      </View>
      <StatusBar style="dark" />
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
    fontSize: 30,
    color: '#F29F05'
  },
  infoText: {
    color: '#FFF',
    fontSize: 25
  },
  spotlightView: {
    alignItems: 'center',
    marginTop: 20,
    width: 350,
    height: 350,
    padding: 20,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  spotlightText: {
    fontSize: 90,
    color: '#F29F05'
  },
  boxes: {
    flex: 1,
    width: '100%',
    flexDirection: 'row'
  },
});