import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function SpotlightBoxes(props) {

    return (
                <View style={styles.spotlightBox}>
                    <Text>{props.name}</Text>
                </View>
    );
}

const styles = StyleSheet.create ({  
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