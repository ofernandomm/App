import React from "react";
import {Text,TouchableOpacity} from 'react-native'
import {styles} from './styles'

const ItemToDo = ({item,onHandleSelected}) =>{
    let styleItem=""
    let boxStyle=""
    if(item.completed==false){
        styleItem=styles.listItem
        boxStyle=styles.listItemContainer
    }else{
        styleItem=styles.listItemCompleted
        boxStyle=styles.listItemContainerCompleted
    }
    return(
        <TouchableOpacity style={boxStyle} onPress={()=>onHandleSelected(item)}>
            <Text style={styleItem}>{item.value}</Text>
        </TouchableOpacity>
    )
}
export default ItemToDo;