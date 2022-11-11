import React from "react";
import {View, Modal, Text, Button} from 'react-native'
import {styles} from './styles'


const ModalActions = ({modalVisible,selectedTask,onHandleCancel,onHandleDelete,onHandleComplete}) =>{
    return(
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
                    color='#46919E'
                    onPress={onHandleCancel}
                    />
                    <Button
                    title='Complete'
                    color='#5BD5EB'
                    onPress={onHandleComplete}
                    />
                    <Button
                    title='Delete'
                    color='#9E3E69'
                    onPress={onHandleDelete}
                    />
                </View>
                </View>
            </Modal>
    )
}


export default ModalActions;