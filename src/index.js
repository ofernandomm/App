import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {styles} from './styles'
import { AddItems } from './components/index';
import { ModalDelete } from './components/index';
import { TodoList } from './components/index';
import { ItemToDo } from './components/index';


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
        ...currentItems, {id: Math.random().toString(), value:textItem, completed:false}
      ])
      setTextItem('')
    }
  }

  const renderItem =({item})=>{
    let boxStyle=""
    if(item.completed==false){
      boxStyle=styles.listItemContainer
    }else{
      boxStyle=styles.listItemContainer2
    }
    return(
        <TouchableOpacity style={boxStyle} onPress={()=>onHandleSelected(item)}>
          <ItemToDo item={item}/>
        </TouchableOpacity>
    )
  }

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

  const onHandleComplete =(item)=>{
    selectedTask.completed=true
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <AddItems textItem={textItem} addItem={addItem} onHandlerChangeItem={onHandlerChangeItem}  />
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Todo list</Text>
      </View>
      <TodoList itemList={itemList} renderItem={renderItem}/>
      <ModalDelete modalVisible={modalVisible} onHandleCancel={onHandleCancel} onHandleDelete={onHandleDelete} onHandleComplete={onHandleComplete} selectedTask={selectedTask}/>
    </View>
  );
}