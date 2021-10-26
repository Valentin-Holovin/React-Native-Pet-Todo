import React from "react";
import { StyleSheet, View, Text, FlatList, Dimensions } from "react-native";
import AddTodo from '../../components/AddTodo/AddTodo'
import Todo from '../../components/Todo/Todo'

const wiHeight = Dimensions.get('window').height;

const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
    return(
        <View style={styles.container}>
            <AddTodo onSubmit={addTodo}/>
                
                <FlatList style={styles.list}
                    keyExtractor={item => item.id.toString()}
                    data={todos}
                    renderItem={({item}) =>  (
                        <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>
                    )}
                />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 20,
    },
    list:{
        height: wiHeight -155,
    }
    
});

export default MainScreen