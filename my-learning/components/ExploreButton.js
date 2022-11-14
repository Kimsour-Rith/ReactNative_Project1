import { Text, StyleSheet, TouchableOpacity, } from "react-native";

export default function ExploreButton({text}) {
  return(
    <TouchableOpacity style={styles.button}>
      <Text style={styles.tap_btn_text}>{text}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  tap_btn_text: {
    color: 'darkolivegreen',
  },
  button : {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    },
})