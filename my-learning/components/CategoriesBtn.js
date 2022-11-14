import { Text, StyleSheet, TouchableOpacity, } from "react-native";
export default function CategoriesBtn({btnName}) {
  return(
    <TouchableOpacity style={styles.cateButton}>
      <Text style={styles.buttonText}>{btnName}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  cateButton : {
    backgroundColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginRight: 5,
    marginBottom: 5
  },
  buttonText : {
    color: 'white'
  },
})