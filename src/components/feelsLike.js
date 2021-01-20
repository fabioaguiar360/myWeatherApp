import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import weatherApi from '../services/weatherApi';
import Spotlights from './spotlights';
import WeatherMainIcon from './weatherMainIcon';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function FeelsLike( {navigation} ) {
  const [weatherData, setWeatherData] = useState([]);
  const [main, setMain] = useState({}); 
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
        <Text style={styles.spotlightText}>{Math.round(main.feels_like)}º</Text>
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
          <Text style={styles.infoText}>Feels Like</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2226',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    color: '#F29F05'
  },
  minText: {
    fontSize: 15,
    color: '#FFF',
    margin: 5
  },
  infoText: {
    color: '#FFF',
    fontSize: 25,
    marginBottom: 30
  },
  spotlightView: {
    alignItems: 'center',
    height: '60%',
    padding: 20,
    justifyContent: 'center',
    position: 'absolute',
    top: 50
  },
  spotlightText: {
    fontSize: 160,
    color: '#F29F05',
  },
  boxes: {
    flex: 1,
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0
  },
  spotlightBox: {
    width: 150,
    height: 190,
    backgroundColor: '#F29F05',
    fontSize: 70,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#1F2226',
    margin: 15,
    borderRadius: 10
  }
  
});
