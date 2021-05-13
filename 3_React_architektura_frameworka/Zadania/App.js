import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Name from './Zadanie 1/Name'
import Surname from './Zadanie 1/Surname'
import SquareBox from "./Zadanie 2/SquareBox";
import ShowDate from "./Zadanie 3/ShowDate";
import Map from "./Zadanie 4/Map";
import Grid from "./Zadanie 5/Grid";
import Pizza from "./Zadanie 6/Pizza";
import Invitation from "./Zadanie 7/Invitation";
import DateTimer from "./Zadanie 8/DateTimer";

let inviteData = {
    date: "sobota",
    time: "16",
    place: "domowka",
    dressCode: "brak"

}

let dateTime = new Date()

export default function App() {
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
            <DateTimer date = {dateTime} />
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
