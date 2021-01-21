import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import weatherApi from '../services/weatherApi';
import Spotlights from './spotlights';
import WeatherMainIcon from './weatherMainIcon';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Visibility( {navigation} ) {
  const [weatherData, setWeatherData] = useState([]); 
  const [main, setMain] = useState([]);
  const [sys, setSys] = useState([]);

  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = hour + ':' + min ;
    return time;
  }
 
 async function getData(){
   await weatherApi.get().then((data) => {
        setWeatherData(data.data);
        setMain(data.data.main);
        setSys(data.data.sys);
    });
  }

  useEffect(() => {
    getData();

  },[]);

  
  return (
    <View style={styles.container}>
      <View style={styles.spotlightView}>
      <Text style={styles.spotlightText}>{weatherData.visibility/1000}</Text>
        <Text style={styles.spotlightTextMin}>Km</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.minText}>
          <Icon name="level-down-alt" 
            size={15} color="#FFF" 
            /> min: 
             {Math.round(main.temp_min)}º 
          </Text>
          <Text style={styles.minText}>
            <Icon
              name="level-up-alt" 
              size={15} color="#FFF" 
            /> max: {Math.round(main.temp_max)}º    
          </Text>
          
        </View>
        <View>
            <Text style={styles.minText}>Sunrise: {timeConverter(sys.sunrise)} - Sunset: {timeConverter(sys.sunset)}</Text>
            <WeatherMainIcon />
         </View>
          <Text style={styles.text}>{weatherData.name} - {sys.country}</Text>
        <Text style={styles.infoText}>Visibility</Text>
      </View>
      
      
      <ScrollView horizontal={true} style={styles.boxes}>
  
      <Spotlights navigation={navigation} />
        
      </ScrollView>
      <StatusBar
          barStyle = "light-content"
          hidden = {false}
          backgroundColor = "#1F2226"
          translucent = {true}
          networkActivityIndicatorVisible = {true}
          color = {'#FFF'}
      />
    </View>
  );
}
