import React from 'react'
import { StyleSheet, View } from 'react-native'

const Square5 = () => {
    return (
        <View>
            <View style={[styles.innerContainerBlue]} />
            <View style={[styles.innerContainerRed]}>
                <View style={[styles.innerInnerContainerYellow]} />
                <View style={[styles.innerInnerContainerYellow]} />
                <View style={[styles.innerInnerContainerYellow]} />
                <View style={[styles.innerInnerContainerYellow]} />
                <View style={[styles.innerInnerContainerYellow]} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    innerContainerBlue: {
        backgroundColor: 'blue',
        width: 600,
        height: 300,
        marginBottom: 10
    },
    innerContainerRed: {
        display: 'flexbox',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'red',
        width: 600,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerInnerContainerYellow: {
        flexBasis: "25%",
        backgroundColor: 'yellow',
        width: 250,
        height: 100,
        marginLeft: 10,
        marginRight: 10
    },
})

export default Square5