import React from "react";
import {FlatList} from 'react-native'
import {styles} from './styles'

const TodoList = ({itemList,renderItem}) =>{
    return(
        <FlatList
      style={styles.listContainer}
      data={itemList}
      renderItem={renderItem}
      keyExtractor={item=>item.id.toString()}
      />
    )
}
export default TodoList;