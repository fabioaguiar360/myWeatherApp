import { StyleSheet } from 'react-native';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F2226',
      alignItems: 'center',
    },
    containerLight: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
    },
    text: {
      fontSize: 30,
      color: '#F29F05'
    },
    textLight: {
      fontSize: 30,
      color: '#000'
    },
    minText: {
      fontSize: 15,
      color: '#FFF',
      margin: 5
    },
    minTextLight: {
      fontSize: 15,
      color: '#000',
      margin: 5
    },
    infoText: {
      color: '#FFF',
      fontSize: 25,
      marginBottom: 30
    },
    infoTextLight: {
      color: '#000',
      fontSize: 25,
      marginBottom: 30
    },
    spotlightTextLight: {
      fontSize: 160,
      color: '#000',
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
    },
    spotlightBoxLight: {
      width: 150,
      height: 190,
      backgroundColor: '#000',
      fontSize: 70,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFF',
      margin: 15,
      borderRadius: 10
    },
    toggleThemeBtn: {
      position: 'absolute',
      zIndex: 2,
      elevation: 2,
      padding: 10,
      flexDirection: 'row-reverse',
      marginTop: 30,
      backgroundColor: '#1F2226',
      alignSelf: 'flex-end',
    },
    toggleThemeBtnLight: {
      position: 'absolute',
      zIndex: 2,
      elevation: 2,
      flexDirection: 'row-reverse',
      padding: 10,
      marginTop: 30,
      backgroundColor: '#FFF',
      alignSelf: 'flex-end'
    },
    toggleThemeText: {
      color: '#FFF',
      fontSize: 15
    },
    toggleThemeTextLight: {
      color: '#000',
      fontSize: 15
    },
    smallToggle: {
      width: 20
    }
    
  });
  
  export { styles };