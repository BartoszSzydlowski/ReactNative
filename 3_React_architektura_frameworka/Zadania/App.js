import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Name from './Zadanie 1/Name'
import Surname from './Zadanie 1/Surname'
import SquareBox from "./Zadanie 2/SquareBox";
import ShowDate from "./Zadanie 3/ShowDate";
import Map from "./Zadanie 4/Map";
import Grid from "./Zadanie 5/Grid";
import Pizza from "./Zadanie 6/Pizza";
import Invitation from "./Zadanie 7/Invitation";
import DateTimer from "./Zadanie 8/DateTimer";
import DateTimerWithState from "./Zadanie 9/DateTimerWithState";

// let inviteData = {
//     date: "sobota",
//     time: "16",
//     place: "domowka",
//     dressCode: "brak"
//
// }

//let dateTime = new Date()

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function App() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [randomNumber, setRandomNumber] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    },  [])
    return (
        <View style={styles.container}>
            {/*<Name />*/}
            {/*<Surname />*/}
            {/*<ShowDate />*/}
            {/*<Map />*/}
            {/*<SquareBox />*/}
            {/*<Grid />*/}
            {/*<Pizza />*/}
            {/*<Invitation inviteData = {inviteData} />*/}
            {/*<DateTimer date = {dateTime} />*/}
            <DateTimer date={time} />
            <Text>{randomNumber}</Text>
            <Button
                title={"Losuj"}
                onPress={() => setRandomNumber(getRandomInt(1,10))}
            />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
