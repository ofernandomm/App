import React from "react";
import {Text} from 'react-native'
import {styles} from './styles'

const ItemToDo = ({item}) =>{
    let styleItem=""
    if(item.completed==false){
        styleItem=styles.listItem
    }else{
        styleItem=styles.listItemCompleted
    }
    return(
        <Text style={styleItem}>{item.value}</Text>
    )
}
export default ItemToDo;