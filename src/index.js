import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList, Modal, TouchableOpacity } from 'react-native';
import { AddItems } from './components/index';

export default function App() {
  const [textItem,setTextItem]= useState('')
  const [itemList,setItemList]= useState([])
  const [selectedTask, setSelectedTask] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const onHandlerChangeItem = (text)=>{
    setTextItem(text)
  };
  const addItem=()=>{
    if(textItem==''){
      alert('Agrega una tarea')
    }else{
      setItemList(currentItems=>[
        ...currentItems, {id: Math.random().toString(), value:textItem}
      ])
      setTextItem('')
    }
  }
  const renderItem =({item})=>(
        <TouchableOpacity style={styles.listItemContainer} onPress={()=>onHandleSelected(item)}>
          <Text style={styles.listItem}>{item.value}</Text>
        </TouchableOpacity>
  )

  const onHandleSelected = (item)=>{
    setSelectedTask(item);
    setModalVisible(true);
  }

  const onHandleCancel = () =>{
    setSelectedTask('');
    setModalVisible(false);
  }

  const onHandleDelete =()=>{
    setItemList((currentItems)=>
      currentItems.filter((item)=>item.id != selectedTask.id))
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <AddItems textItem={textItem} addItem={addItem} onHandlerChangeItem={onHandlerChangeItem}  />
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Todo list</Text>
      </View>
        <FlatList
        style={styles.listContainer}
        data={itemList}
        renderItem={renderItem}
        keyExtractor={item=>item.id.toString()}
        />
      <Modal visible={modalVisible} animationType='fade'>
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Task detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailText}>¿quieres eliminarlo?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button
            title='cancel'
            color='#9a848f'
            onPress={onHandleCancel}
            />
            <Button
            title='Delete'
            color='#9a848f'
            onPress={onHandleDelete}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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
},
  modalContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:60,
    paddingVertical:20
},
  modalTitle:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:10

},
  modalDetailContainer:{
    paddingVertical:20,

},
modalDetailText:{
  fontSize:14,
  color:'#212121'

},
  selectedTask:{
    fontSize:14,
    color:'#212121',
    fontWeight:'bold'

},
  modalButtonContainer:{
    width:'70%',
    flexDirection:'row',
    justifyContent:'space-around',
    marginHorizontal:20
}
});
