import React from 'react'
import { View, StyleSheet } from 'react-native'
import { COLORS } from '../../Colors/Colors';

const Card = (props) => {
    return (
        <View style={{...styles.default, ...props.style}}>
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    default: {
        borderWidth: 2,
        borderColor: COLORS.MAIN_COLOR,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10
    }
})

export default Card
