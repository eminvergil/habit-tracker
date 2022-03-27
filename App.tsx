import { StyleSheet, Text, View} from 'react-native';
import {Button} from "react-native-elements";
import React, {useState} from "react";
import HabitContainer from "./components/HabitContainer";
import OverlayComponent from "./components/Overlay/OverlayComponent";

export default function App() {


  return (
    <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginBottom:20, borderStyle: 'dashed', borderWidth: 2 , padding: 5}}>Break your bad habits</Text>
        <HabitContainer />
        <Button title="Create Goal" onPress={() => console.log(true)} containerStyle={{margin: 10}} />
        <OverlayComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      padding:10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
