import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeaturedScreen from './screens/Featured';
import SearchScreen from './screens/Search';
import MyLearningScreen from './screens/MyLearning';
import WishlistScreen from './screens/Wishlist';
import AccountScreen from './screens/Account';

const featuredName = 'Featured';
const accountName = 'Account';
const mylearning = 'MyLearning';
const searchName = 'Search';
const wishlsName = 'Wishlist';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
export default function MainContainer(){
  return(
    <NavigationContainer >
      <Tab.Navigator
        initialRouteName={featuredName}
        activeColor='white'
        inactiveColor='grey'
        barStyle={{backgroundColor: 'black', paddingBottom:10}}
        
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            let rn = route.name;

            if(rn === featuredName) {
              iconName = focused ? 'star' : 'star-outline';
            }
            else if(rn === searchName) {
              iconName = focused ? 'file-search' : 'file-search-outline';
            }
            else if(rn === mylearning) {
              iconName = focused ? 'play' : 'play-circle-outline';
            }
            else if(rn === wishlsName) {
              iconName = focused ? 'cards-heart' : 'cards-heart-outline';
            }
            else if(rn === accountName) {
              iconName = focused ? 'account-circle' : 'account-circle-outline';
            }

            return <Icons name={iconName} size={25} color={color}/>
          },
        })}
        >
        
        <Tab.Screen name={featuredName} component={FeaturedScreen} />
        <Tab.Screen name={searchName} component={SearchScreen} />
        <Tab.Screen name={mylearning} component={MyLearningScreen} />
        <Tab.Screen name={wishlsName} component={WishlistScreen} />
        <Tab.Screen name={accountName} component={AccountScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}