import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const Map = () => {
    const imgUrl = 'https://odleglosci.info/img/maps/p_map2_big.png'
    return (
        <View>
            <Image
                source = { imgUrl }
                style = { styles.image }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300
    }
})

export default Map