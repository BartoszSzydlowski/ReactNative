import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const DateTimer = ({date}) => {
    return (
        <View>
            {/*<Text>Date: { date.toLocaleDateString() }</Text>*/}
            {/*<Text>Time: { date.toLocaleTimeString() }</Text>*/}
            <Text>Time: { date }</Text>
        </View>
    );
};

export default DateTimer;