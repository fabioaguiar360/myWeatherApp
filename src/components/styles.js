import { StyleSheet } from 'react-native';

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
  
  export { styles };