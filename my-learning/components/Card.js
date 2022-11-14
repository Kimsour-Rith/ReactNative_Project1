import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet,Image} from 'react-native';
import StarRating from './StarRating';
import BestSellerBtn from './BestSellerBtn';
import { datasets } from '../Datasets/Dataset';

class Cards extends Component {
  render() {
    return (
      <View>
        <ScrollView horizontal={true}>
          {datasets.map(({ key,headerText, uri,authoName, price}) => (
            <View style={styles.card}>
              <View style={styles.cardImg} key={key}>
                <Image
                  style={{flex: 1, width: undefined, height: undefined}}
                  source={uri}
                ></Image>
              </View>
              <Text style={styles.detailText}>{headerText}</Text>  
              <Text style={styles.authoName}>{authoName}</Text>
              <StarRating/>
              <Text style={styles.detailText}>{price}</Text>
              <BestSellerBtn/>

            </View>
         ))}
        </ScrollView>
      </View>
    );
  }
}

export default Cards;
const styles = StyleSheet.create({
  card: {
    flexDirection: "column", 
    width: 150, 
    height: 270, 
    backgroundColor: 'black', 
    marginRight: 20
  },

  detailText : {
    fontFamily: "System",
    fontSize: 14,
    color: "#F8F4FF",
    marginTop: 10,
    fontWeight: "bold",
  },
  cardStyle: {
    backgroundColor: "black",
    width: 150,
    height: 250,
    elevation: 12,
  },
  cardImg : {
    width: 150,
    height: 90, 
    backgroundColor: 'black'
  },
  authoName : {
    color: 'grey',
    fontSize: 12,

  }
});

