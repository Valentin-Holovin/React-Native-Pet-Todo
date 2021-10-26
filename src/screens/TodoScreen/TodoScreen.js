import React, {useState} from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import Card from '../../components/UI/Card';
import {COLORS} from '../../Colors/Colors'
import EditModal from '../../components/EditModal/EditModal';

const TodoScreen = ({goBack, todo, onRemove, onSave}) => {
    const  [modal, setModal] = useState(false)

    const saveHandler = title => {
        onSave(todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <Card style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Edit' onPress={() => setModal(true)}/>
            </Card>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Back" color={COLORS.GRAY_COLOR} onPress={goBack}/>
                </View>
                <View style={styles.button}>
                    <Button title="Delete" color={COLORS.DANGER_COLOR} onPress={() => onRemove(todo.id)}/>
                </View>
            </View>

            <EditModal 
                value={todo.title} 
                visible={modal} 
                onCancel={() => setModal(false)}
                onSave={saveHandler}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    card:{
        margin: 25, 
        padding: 25
    },  
    button:{
        width: '30%'        
    },
    title:{
        fontSize: 26
    }
})

export default TodoScreen
