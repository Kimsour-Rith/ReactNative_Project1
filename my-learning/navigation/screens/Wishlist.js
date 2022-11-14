import * as React from 'react';
import {
  View, 
  Text, 
  StyleSheet
} 
from 'react-native';

export default function WishlistScreen({navigation}) {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text 
        onPress={() => alert('This is the Wishlist Screen')}
        style={{fontSize: 26, fontWeight: 'bold'}}
        >Wishlist Screen
      </Text>
    </View>
  )
}