import React from 'react'
import Square from "./Square"
import {View} from "react-native";

const SquareBox = () => {
    return (
        <View>
            <Square color={"red"}/>
            <Square color={"green"}/>
            <Square color={"blue"}/>
        </View>
    )
}

export default SquareBox