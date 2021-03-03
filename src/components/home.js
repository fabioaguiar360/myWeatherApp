import React, { useContext } from 'react';
import { Text, View, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import WeatherMainIicon from './weatherMainIcon';

import Spotlights from './spotlights';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ApiContext } from '../context/apiContext';

export default function Home( {navigation} ) {
 
  // deconstruo o contexto que vem do ApiContext
  // se não desconstruisse, poderia criar um context = useContext(ApiContext) e usar algo do tipo
  // context.main.temp por exemplo
  const { main, sys, theme, weatherData, setTheme }  = useContext(ApiContext);
  
  
  const toggleTheme =  async() => {
    theme == 'dark' ? setTheme('light') : setTheme('dark'); 
  }
 
  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = hour + ':' + min ;
    return time;
  }

  return (
    
      
    <View style={theme == 'dark' ? styles.container : styles.containerLight}>
      <TouchableOpacity
        style={theme == 'dark' ? styles.toggleThemeBtn : styles.toggleThemeBtnLight }
        onPress={() => toggleTheme()}>
          <Text style={theme == 'dark' ? styles.toggleThemeText : styles.toggleThemeTextLight}>
            {theme == 'dark' ? <Icon name="toggle-off" size={25} color="#FFF" /> : <Icon name="toggle-on" size={25} color="#1F2226" />}
            </Text>
      </TouchableOpacity>
      <View style={styles.spotlightView}>
        <Text style={theme == 'dark' ? styles.spotlightText : styles.spotlightTextLight }>{Math.round(main.temp)}º</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={theme == 'dark' ? styles.minText : styles.minTextLight}>
          <Icon name="level-down-alt" 
            size={15} color="#FFF" 
            /> min: 
            {Math.round(main.temp_min)}º 
          </Text>
          <Text style={theme == 'dark' ? styles.minText : styles.minTextLight}>
            <Icon
              name="level-up-alt" 
              size={15} color="#FFF" 
            /> max: {Math.round(main.temp_max)}º    
          </Text>
          
        </View>
        <View>
          <Text style={theme == 'dark' ? styles.minText: styles.minTextLight }>
            Sunrise: {timeConverter(sys.sunrise)} - Sunset: {timeConverter(sys.sunset)}
          </Text>
          <WeatherMainIicon />
        </View>
        <Text style={theme == 'dark' ? styles.text : styles.textLight}>{weatherData.name} - {sys.country}</Text>
      <Text style={theme == 'dark' ? styles.infoText: styles.infoTextLight }>Real Temperature</Text>
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

