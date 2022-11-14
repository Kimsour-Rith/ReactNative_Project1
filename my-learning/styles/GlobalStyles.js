import { StyleSheet , StatusBar} from "react-native";
const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
  flex: 1,
  backgroundColor: "black",
  flexDirection: "column",
  },
  image : {
    flex:1 , 
    width: undefined, 
    height: undefined
  },
  tab_button : {
    paddingHorizontal: 20, 
    paddingBottom: 20, 
    height: 150
  },
  
  buttonText : {
    color: 'white'
  },
  cateText : {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    color: 'white',
    paddingHorizontal: 20, 
    marginBottom: 7
  },
  contentText : {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3
  },
  seeAll : {
    fontSize: 14,
    color: 'cornflowerblue'
  },
  
})

export default globalStyles;