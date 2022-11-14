import * as React from 'react';
import {
  View, 
  Text, 
  StyleSheet
} 
from 'react-native';

export default function AccountScreen({navigation}) {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text 
        onPress={() => alert('This is the Account Screen')}
        style={{fontSize: 26, fontWeight: 'bold'}}
        >Account Screen
      </Text>
    </View>
  )
}