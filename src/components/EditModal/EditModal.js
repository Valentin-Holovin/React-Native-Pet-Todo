import React, {useState} from "react";
import { View, StyleSheet, TextInput, Button, Modal, Alert } from "react-native";
import { COLORS } from "../../Colors/Colors";

const EditModal = ({visible, onCancel, value, onSave}) => {
    
    const [title, setTitle] = useState(value)
    
    const saveHandler = () => {
        if(title.trim().length < 3) {
            Alert.alert('Error', `Minimum 3 characters, Now ${title.trim().length} `)
        }else{
            onSave(title)
        }
    };

    return(
        <Modal visible={visible} animationType='slide'>
            <View style={styles.wrap}>
                <TextInput 
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input} 
                    placeholder='Enter the title'
                />
                <View style={styles.buttons}>
                    <Button title="Cancel" onPress={onCancel} color={COLORS.DANGER_COLOR}/>
                    <Button title="Save" onPress={saveHandler}/>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        padding: 10,
        borderBottomColor: COLORS.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '75%'
    },
    buttons:{
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default EditModal