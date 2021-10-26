import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { COLORS } from "../../Colors/Colors";

const Navbar = () => {
    return(
        <View style={styels.navbar}>
            <Text style={styels.text}>
                Todo App
            </Text>
        </View>
    )
}

const styels = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: COLORS.MAIN_COLOR,
        paddingBottom: 10
    },
    text:{
        color: 'white',
        fontSize: 20
    }
})

export default Navbar