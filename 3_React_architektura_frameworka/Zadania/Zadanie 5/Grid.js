import React from 'react'
import { StyleSheet, View } from 'react-native'

const Grid = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.innerContainerBlue]} />
            <View style={[styles.innerContainerRed]}>
                <View style={[styles.innerInnerContainer, {marginRight: 20}]}/>
                <View style={[styles.innerInnerContainer, {marginLeft: 20}]}/>
                {/*<View style={[styles.innerInnerContainerYellow]} />*/}
                {/*<View style={[styles.innerInnerContainerYellow]} />*/}
                {/*<View style={[styles.innerInnerContainerYellow]} />*/}
                {/*<View style={[styles.innerInnerContainerYellow]} />*/}
                {/*<View style={[styles.innerInnerContainerYellow]} />*/}
            </View>
        </View>
    )
}

// const styles = StyleSheet.create({
//     innerContainerBlue: {
//         backgroundColor: 'blue',
//         width: 600,
//         height: 300,
//         marginBottom: 10
//     },
//     innerContainerRed: {
//         display: 'flexbox',
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         backgroundColor: 'red',
//         width: 600,
//         height: 300,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     innerInnerContainerYellow: {
//         flexBasis: "25%",
//         backgroundColor: 'yellow',
//         width: 250,
//         height: 100,
//         marginLeft: 10,
//         marginRight: 10
//     },
// })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainerBlue: {
        flex: 1,
        height: 200,
        width: 600,
        backgroundColor: 'blue'
    },
    innerContainerRed: {
        height: 200,
        width: 600,
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    innerInnerContainer: {
        backgroundColor: 'yellow',
        width: '45%',
        height: 100
    }
})

export default Grid