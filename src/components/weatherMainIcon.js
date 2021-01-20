import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import weatherApi from '../services/weatherApi';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function WeatherMainIcon() {
  const [weatherIcon, setWeatherIcon] = useState({});
  
 async function getData(){
   await weatherApi.get().then((data) => {
        setWeatherIcon(data.data.weather[0]);
    });
  }

  

  useEffect(() => {
    getData();
    console.log(weatherIcon.main);
    
  },[]);

  
  return (
      
        <View>
            <Image source={{uri: 'http://openweathermap.org/img/wn/'+weatherIcon.icon+'.png' }}
       style={styles.image} />
            <Text style={styles.spotlightTextMin}>{weatherIcon.description}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
 
  
    spotlightTextMin: {
      fontSize: 20,
      color: '#F29F05',
      justifyContent: `center`,
      alignSelf: 'center'
    },
    image: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 100,
        height: 100
    }
   
  });
  