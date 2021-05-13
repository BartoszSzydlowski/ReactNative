import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Name from './Zadanie 1/Name'
import Surname from './Zadanie 1/Surname'
import SquareBox from "./Zadanie 2/SquareBox";
import ShowDate from "./Zadanie 3/ShowDate";
import Map from "./Zadanie 4/Map";
import Square5 from "./Zadanie 5/Square5";
import Pizza from "./Zadanie 6/Pizza";

export default function App() {
  return (
    <View style={styles.container}>
        {/*<Name />*/}
        {/*<Surname />*/}
        {/*<ShowDate />*/}
        {/*<Map />*/}
        {/*<SquareBox />*/}
        <Square5 />
        {/*<Pizza />*/}
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
