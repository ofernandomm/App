import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFE599',
      marginTop:25,
    },
    listContainer:{
      marginHorizontal:20,
    },
    listTitle:{
      fontSize:18,
      fontWeight:'bold',
      marginBottom:10,
      color:'#37505C',
    },
    listItemContainer: {
      paddingVertical: 20,
      backgroundColor: '#9A848F',
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      justifyContent: 'center',
      marginVertical: 5,
    },
    listItem: {
        fontSize: 14,
        color: '#ffffff',
        paddingHorizontal: 10,
    }
  });