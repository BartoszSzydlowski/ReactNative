import React from 'react'
import { StyleSheet, View } from 'react-native'

const Square = ({color}) => {
    return (
        <View style={[styles.square, { backgroundColor: color }]}/>
    )
}

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        margin: 10
    }
})

export default Square