import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import weatherApi from '../services/weatherApi';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Spotlights( {navigation} ) {
  const [weatherData, setWeatherData] = useState([]);
  const [main, setMain] = useState({}); 
  const [wind, setWind] = useState([]);
  const [sys, setSys] = useState([]);


 async function getData(){
   await weatherApi.get().then((data) => {
        setWeatherData(data.data);
        setMain(data.data.main);
        setWind(data.data.wind);
        setSys(data.data.sys);
    });
  }

  useEffect(() => {
    getData();
  },[]);

  
  return (
   
    <ScrollView horizontal={true} style={styles.boxes}>
    
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.spotlightBox}>
        <Text><Icon name="thermometer-full" size={70} color="#1F2226" /></Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('FeelsLike')}>
        <View style={styles.spotlightBox}>
        <Text><Icon name="tshirt" size={70} color="#1F2226" /></Text>
        </View>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => navigation.navigate('Wind')}>
        <View style={styles.spotlightBox}>
        <Text><Icon name="wind" size={70} color="#1F2226" /></Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Humidity')}>
        <View style={styles.spotlightBox}>
        <Text><Icon name="tint" size={70} color="#1F2226" /></Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Visibility')}>
        <View style={styles.spotlightBox}>
        <Text><Icon name="eye" size={70} color="#1F2226" /></Text>
        </View>
    </TouchableOpacity>
    
    </ScrollView>
      
  );
}

const styles = StyleSheet.create({
 
  spotlightView: {
    alignItems: 'center',
    marginTop: 20,
    width: 350,
    height: 350,
    padding: 20,
    justifyContent: 'center',
  },
  spotlightText: {
    fontSize: 135,
    color: '#F29F05'
  },
  spotlightTextMin: {
    fontSize: 20,
    color: '#F29F05'
  },
  boxes: {
    flex: 1,
    width: '100%',
    flexDirection: 'row'
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
