import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import weatherApi from '../services/weatherApi';
import Icon from 'react-native-vector-icons/FontAwesome5';

//https://oblador.github.io/react-native-vector-icons/ - study if I can use Fontisto too

export default function Home( props ) {
  const [weatherData, setWeatherData] = useState([]); 
  const [main, setMain] = useState([]);
  const [sys, setSys] = useState([]);

  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    // var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    // var year = a.getFullYear();
    // var month = months[a.getMonth()];
    // var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    // var sec = a.getSeconds();
    //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;

    // verfficar como pegar o timezone para diminuir de hour
    var time = hour -3 + ':' + min ;
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
        <Text style={styles.spotlightText}>{Math.round(main.temp)}º</Text>
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
        </View>
      </View>
      
      <Text style={styles.text}>{weatherData.name} - {sys.country}</Text>
      <Text style={styles.infoText}>Real Temperature</Text>
      <ScrollView horizontal={true} style={styles.boxes}>
       
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <View style={styles.spotlightBox}>
            <Text><Icon name="thermometer-full" size={70} color="#1F2226" /></Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('FeelsLike')}>
          <View style={styles.spotlightBox}>
            <Text><Icon name="tshirt" size={70} color="#1F2226" /></Text>
          </View>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => props.navigation.navigate('Wind')}>
          <View style={styles.spotlightBox}>
            <Text><Icon name="wind" size={70} color="#1F2226" /></Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Humidity')}>
          <View style={styles.spotlightBox}>
            <Text><Icon name="tint" size={70} color="#1F2226" /></Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Visibility')}>
          <View style={styles.spotlightBox}>
            <Text><Icon name="eye" size={70} color="#1F2226" /></Text>
          </View>
        </TouchableOpacity>
        
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
    fontSize: 135,
    color: '#F29F05',
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
