import { StyleSheet } from "react-native";
export const styles=StyleSheet.create({
    listItem: {
        fontSize: 14,
        color: '#ffffff',
        paddingHorizontal: 10,
    },
    listItemCompleted:{
        fontSize: 14,
        color: '#ffffff',
        paddingHorizontal: 10,
    },
    listItemContainer: {
        paddingVertical: 20,
        backgroundColor: '#EBE18A',
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
      listItemContainerCompleted:{
        paddingVertical: 20,
        backgroundColor: '#5BD5EB',
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
      }
})