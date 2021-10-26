import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { COLORS } from '../../Colors/Colors';

const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if(value.trim()){
            onSubmit(value)
            setValue('')
        }else{
            Alert.alert('Case title cannot be empty')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Case name...'
            />
            <Button style={styles.buttons} title='Add' onPress={pressHandler}/>
        </View>
    )
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: COLORS.MAIN_COLOR,
    },
    buttons:{
        width: "90%", margin: 10, backgroundColor: "red"

        
    }
})

export default AddTodo
