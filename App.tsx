import { StyleSheet, Text, View} from 'react-native';
import {Input, LinearProgress, Button, Overlay} from "react-native-elements";
import React, {useState} from "react";
import {Habit} from "./components/Habit/Habit";

export default function App() {
  const [day, setDay] = useState(3)
    const [started,setStarted] = useState(true)

  function toggleOverlay() {
    setStarted(!started)
  }

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>Break your bad habits</Text>
      {/*TODO: propsları bi class yapsınıa at*/}
        <Habit day={day} goal={30} started={started} setStarted={setStarted} setDay={setDay} />
      <Button title="Create Goal" onPress={() => setStarted(true)} containerStyle={{margin: 10}}/>
      <Overlay isVisible={started} onBackdropPress={toggleOverlay}>
          <Habit day={day} goal={15} started={!started} setStarted={setStarted} setDay={setDay} />
      </Overlay>
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
