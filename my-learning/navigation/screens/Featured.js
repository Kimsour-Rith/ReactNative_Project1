import * as React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Text,
} from "react-native";

import globalStyles from '../../styles/GlobalStyles'
import { useState } from 'react';
import ExploreButton from '../../components/ExploreButton';
import CategoriesBtn from '../../components/CategoriesBtn'
import CourseName from '../../components/CourseName';

  
export default function FeaturedScreen({navigation}) {
  const [switchSeeAll, setSwitchSeeAll] = useState(false);

  return(
    <SafeAreaView  style={globalStyles.container}>
      <ScrollView style={globalStyles.scrollView}>
        <View>
          {/* Header Image */}
          <View style={{width: '100%', height:200}}>
            <Image source={require('../../assets/images/boy.jpg')} style= {globalStyles.image}/>
          </View>

          {/* Learning that fits */}
          <View style={globalStyles.tab_button}>
            <View style={{flex: 2}}>
              <Text style={styles.headText}>Learning that fits</Text> 
              <Text style={styles.smallText}>Skills for your present and future</Text> 
            </View>
            
            <ExploreButton text={"Tap to explore popular courses"}/>
          </View>

          {/* Categories */}
          {/* if switchSeeAll is false => flex = 2 else = 1 */}
          <View style={{ flex: switchSeeAll ? 2 : 1}}>
            <View style={styles.cateText}>
              <Text style={globalStyles.contentText}>Categories</Text>
              <Text style={styles.seeAll} 
                onPress={() => setSwitchSeeAll(!switchSeeAll)}>
                {switchSeeAll ? 'See less':'See all'}
              </Text> 
            </View>

            <View style={{flex: 3, display: 'flex', flexDirection: switchSeeAll? 'row' : 'column' }}>
              <ScrollView 
                showsVerticalScrollIndicator= {false} 
                style={{marginBottom: 5}} 
                horizontal = {switchSeeAll ? false : true}
                >
                <CategoriesBtn btnName={"Development"}/>
                <CategoriesBtn btnName={"IT & Support"}/>
                <CategoriesBtn btnName={"Business"}/>
                <CategoriesBtn btnName={"Finance"}/>
                <CategoriesBtn btnName={"Accounting"}/>
                <CategoriesBtn btnName={"Science"}/>
                <CategoriesBtn btnName={"Development"}/>
                <CategoriesBtn btnName={"IT & Support"}/>
                <CategoriesBtn btnName={"Business"}/>
                <CategoriesBtn btnName={"Finance"}/>
                <CategoriesBtn btnName={"Accounting"}/>
                <CategoriesBtn btnName={"Science"}/>
              </ScrollView>

              <ScrollView 
                showsVerticalScrollIndicator= {false} 
                style={{marginBottom: 5}} 
                horizontal = {switchSeeAll ? false : true}
                >
                <CategoriesBtn btnName={"Development"}/>
                <CategoriesBtn btnName={"IT & Support"}/>
                <CategoriesBtn btnName={"Business"}/>
                <CategoriesBtn btnName={"Finance"}/>
                <CategoriesBtn btnName={"Accounting"}/>
                <CategoriesBtn btnName={"Science"}/>
                <CategoriesBtn btnName={"Development"}/>
                <CategoriesBtn btnName={"IT & Support"}/>
                <CategoriesBtn btnName={"Business"}/>
                <CategoriesBtn btnName={"Finance"}/>
                <CategoriesBtn btnName={"Accounting"}/>
                <CategoriesBtn btnName={"Science"}/>
              </ScrollView>
            </View>
          </View>

          {/* List of Courses */}
          <CourseName courseName={"Top course in "} subject={"Design"}/>
          <CourseName courseName={"Top course in "} subject={"Business"}/>
          <CourseName courseName={"Top course in "} subject={"Development"}/>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headText: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Poppins-Bold'
  },
  smallText: {
    fontSize: 14,
    color : 'white',
  },
  cateText : {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    color: 'white',
    paddingHorizontal: 20, 
    
    marginBottom: 7
  },
  seeAll : {
    fontSize: 14,
    color: 'cornflowerblue'
  },
  
});
