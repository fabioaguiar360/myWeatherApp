import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import weatherApi from '../services/weatherApi';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
        <Text style={styles.spotlightText}>{main.temp}º</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.minText}>
            <Icon name="temperature-low" 
              size={15} color="#FFF" 
              /> min: 
              {main.temp_min}º 
            </Text>
            <Text style={styles.minText}>
              <Icon
                name="temperature-high" 
                size={15} color="#FFF" 
              /> max: {main.temp_max}º    
            </Text>
          </View>
      </View>
      <Text style={styles.text}>{weatherData.name}</Text>
      <Text style={styles.infoText}>Feels like Temperature</Text>
      <View style={styles.boxes}>
        
        <TouchableOpacity onPress={() => props.navigation.navigate('FeelsLike')}>
          <View style={styles.spotlightBox}>
            <Text><Icon name="thumbs-up" size={40} color="#1F2226" /></Text>
          </View>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <View style={styles.spotlightBox}>
            <Text><Icon name="thermometer-full" size={40} color="#1F2226" /></Text>
          </View>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => props.navigation.navigate('FeelsLike')}>
          <View style={styles.spotlightBox}>
            <Text><Icon name="wind" size={40} color="#1F2226" /></Text>
          </View>
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
    marginTop: 20,
    width: 350,
    height: 350,
    padding: 20,
    justifyContent: 'center',
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
  spotlightBox: {
    width: 100,
    height: 150,
    backgroundColor: '#F29F05',
    fontSize: 70,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#1F2226',
    margin: 15,
    borderRadius: 10
  }
});
