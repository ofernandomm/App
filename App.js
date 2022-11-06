import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [textItem,setTextItem]= useState('')
  const [itemList,setItemList]= useState(['casa','dos','tres'])
  const onHandlerChangeItem = (text)=>{
    setTextItem(text)
  };
  const addItem=()=>{
    setItemList(currentItems=>[
      ...currentItems, textItem
    ])
    setTextItem('')
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={textItem} onChangeText={onHandlerChangeItem}/>
        <Button title='ADD' color='#113537' onPress={addItem}/>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Todo list</Text>
        {itemList.map(item=><View key={item} style={styles.listItemContainer}>
          <Text style={styles.listItem}>{item}</Text>
        </View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE599',
    marginTop:25,
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    marginVertical: 40,
  },
  input:{
    width:'80%',
    borderBottomWidth:1,
    borderBottomColor:'#37505C',
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
},
});
