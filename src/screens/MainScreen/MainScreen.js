import React from "react";
import { StyleSheet, View, Text, FlatList, Dimensions, Image } from "react-native";
import AddTodo from '../../components/AddTodo/AddTodo'
import Todo from '../../components/Todo/Todo'

const wiHeight = Dimensions.get('window').height;

const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
   let content = (
        <FlatList style={styles.list}
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({item}) =>  (
            <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>
          )}
        /> 
   );
                
    if(todos.length === 0){
        content = 
            <View style={styles.imgWrap}>
                <Image 
                    style={styles.image}
                    source={require('../../../img/123.png')}
                    />
            </View>
    }

    return(
        <View style={styles.container}>
            <AddTodo onSubmit={addTodo}/>
            {content}
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
    },
    imgWrap:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
    image:{
        width: '100%',
        height: '87%', 
        opacity: 0.7
    }
    
});

export default MainScreen