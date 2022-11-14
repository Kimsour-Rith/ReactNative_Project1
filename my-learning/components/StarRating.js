import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
 
const StarRating = () => {
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImageFilled ='https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  const starImageCorner ='https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
 
  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? {uri: starImageFilled}
                    : {uri: starImageCorner}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
 
  return (
    
      <View style={styles.view}>
        <Text style={styles.textStyle}>
          {/* To show the rating selected */}
          {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text> 
        <CustomRatingBar /> 
      </View>
  );
};
 
export default StarRating;
 
const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontSize: 11,
    color: 'orange',
    fontWeight: 'bold',
    marginRight: 5,
    marginTop: 2
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  starImageStyle: {
    width: 15,
    height: 15,
    color: 'orange',
    resizeMode: 'cover',
  },
  view : {
    flex: 1, 
    display: 'flex', 
    flexDirection: 'row', 
    marginTop: 6
  }
});