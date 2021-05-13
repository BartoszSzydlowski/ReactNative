import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const Invitation = ({inviteData}) => {
    const {date, time, place, dressCode} = inviteData
    return (
        <Text>
            {
                `Mam przyjemnosc zaprosic Pana na impreze w ${place} o godzinie ${time}, dnia ${date}. Stroj obowiazujacy to ${dressCode}`
            }
        </Text>
    );
};

export default Invitation;