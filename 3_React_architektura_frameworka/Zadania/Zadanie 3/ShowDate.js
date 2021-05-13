import React from 'react'
import {Text} from 'react-native'


const ShowDate = () => {
    const time = new Date().toLocaleTimeString()
    return <Text>{ time }</Text>
}

export default ShowDate;