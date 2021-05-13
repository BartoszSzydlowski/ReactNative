import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Name from './Zadanie 1/Name'
import Surname from './Zadanie 1/Surname'

export default function App() {
  return (
    <View style={styles.container}>
      <Name />
      <Surname />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
