import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Pizza = () => {
    return (
        <View>
            <Text>
                <Text style = {styles.italicFont}>Pizza</Text> to bardzo smaczne włoskie danie.
                Robi się ją z<Text style = {styles.boldFont}> ciasta drożdżowego</Text>.
                Na ciasto wylewa się <Text style = {styles.boldFont}>sos pomidorowy</Text>.
                Na niego układa się składniki : <Text style = {styles.boldFont}>kiełbasę, ser żółty, oliwki, paprykę</Text>.
                Jest wiele rodzajów pizzy, może być z <Text style = {styles.boldFont}>mięsem,
                bez mięsa, rybna,na słodko z <Text style = {styles.yellowFont}>ananasem</Text></Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    boldFont: {
        fontWeight: 'bold'
    },
    italicFont: {
        fontStyle: 'italic'
    },
    yellowFont: {
        color: 'yellow'
    }
})

export default Pizza;