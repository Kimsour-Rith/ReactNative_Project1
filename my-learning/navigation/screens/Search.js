import * as React from 'react';
import {
  View, 
  Text, 
  StyleSheet
} 
from 'react-native';

export default function SearchScreen({navigation}) {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text 
        onPress={() => alert('This is the Search Screen')}
        style={{fontSize: 26, fontWeight: 'bold'}}
        >Search Screen
      </Text>
    </View>
  )
}