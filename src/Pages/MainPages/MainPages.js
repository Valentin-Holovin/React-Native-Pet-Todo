import React, {useState} from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList, Dimensions, Alert } from 'react-native';
import Navbar from '../../components/Navbar/Navbar';
import MainScreen from '../../screens/MainScreen/MainScreen';
import TodoScreen from '../../screens/TodoScreen/TodoScreen';
import * as Font from 'expo-font'

const MainPages = () => {
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        const newTodo = {
            id: Date.now().toString(),
            title: title
        }

        setTodos((prevTodos) => {
            return[
                ...prevTodos,
                newTodo
            ]
        })
    }

    const removeTodo = id => {
        const todo = todos.find(t => t.id === id)
        Alert.alert(
            'Delete element',
            `Are you sure you want to delete: ${todo.title}`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete', 
                    onPress: () => {
                        setTodoId(null)
                        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
                    }
                },
            ],
            {cancelable: false},
        );
    };

    const updateTodo = (id, title) => {
        setTodos(old => old.map(todo => {
            if(todo.id === id){
                todo.title = title
            }
            return todo 
        }))
    }

    let content = (
        <MainScreen 
            todos={todos} 
            addTodo={addTodo} 
            removeTodo={removeTodo} 
            openTodo={setTodoId}
        />
    )

    if(todoId){
        const selectedTodo = todos.find(todo => todo.id === todoId)
        content = 
            <TodoScreen 
                onRemove={removeTodo} 
                goBack={() => setTodoId(null)} 
                todo={selectedTodo}
                onSave={updateTodo}
            />
    }

    return (
        <>
        <Navbar/>
        {content}
        </>
    )
};



export default MainPages;
