import { Text, StyleSheet, View } from "react-native";
import Cards from "./Card";
export default function CourseName({courseName, subject}) {
  return(
    <View style={styles.view}>
      <View>
        <Text style={styles.contentText}>{courseName} 
          <Text style={{color :"cornflowerblue"}}>{subject}</Text>
        </Text>
      </View>
      <Cards/>
    </View>
    )
}

const styles = StyleSheet.create({
  view : {
    flex: 2, 
    backgroundColor:'black', 
    marginTop: 30
  },
  contentText : {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10, 
    marginLeft: 20,
  },
})