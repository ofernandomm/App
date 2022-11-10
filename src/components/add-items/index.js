import React from "react";
import {View,TextInput,Button} from 'react-native'
import {styles} from './styles'

const AddItems = ({textItem,addItem,onHandlerChangeItem}) =>{
    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} value={textItem} onChangeText={onHandlerChangeItem}/>
            <Button disabled={!textItem} title='ADD' color='#113537' onPress={addItem}/>
        </View>
    )
}
export default AddItems;