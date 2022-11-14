import * as React from 'react';
import {
  View, 
  Text, 
  StyleSheet
} 
from 'react-native';

export default function MyLearningScreen({navigation}) {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text 
        onPress={() => alert('This is the Mylearning Screen')}
        style={{fontSize: 26, fontWeight: 'bold'}}
        >Mylearning Screen
      </Text>
    </View>
  )
}