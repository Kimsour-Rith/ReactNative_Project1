import { Text, StyleSheet, TouchableOpacity, } from "react-native";
export default function BestSellerBtn() {
  return(
    <TouchableOpacity style={styles.btn}>
        <Text>Bestseller</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  btn : {
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100, 
    height: 30, 
    borderRadius: 5, 
    marginVertical: 5
  }
})