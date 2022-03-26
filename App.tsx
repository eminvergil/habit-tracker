import { StyleSheet, Text, View} from 'react-native';
import {Input, LinearProgress, Button} from "react-native-elements";
import {useState} from "react";

export default function App() {
    const [day,setDay] = useState(0)
    const [goal,setGoal] = useState(0)
    const [start,setStart] = useState(false)

    let GetValue = () => {
        return day / goal;
    }

    function handleStart() {
        setStart(true)
        let oldDate = Date.now() - 10
        let calculateDate = Math.abs(Date.now() - oldDate)
        setDay(calculateDate)
    }

    return (
    <View style={styles.container}>
        <View style={{marginVertical:20, width: '90%', flex: 1, flexDirection: 'column', justifyContent: 'center'}}>

            <Text style={{textAlign:'center', fontSize: 30, fontWeight: 'bold'}}>Break your bad habits</Text>
            <Input placeholder="days" style={{marginVertical:10}} onChangeText={(value) => setGoal(Number(value))}/>
            <LinearProgress value={start ? GetValue(): 0} variant="determinate" style={{marginVertical:20}}/>
            <Text style={{textAlign:'center', fontSize: 30, fontWeight: 'bold'}}>Goal: {goal} / Current: {day}</Text>
            <Button title="Start" onPress={() => handleStart()} containerStyle={{margin:10}} />
        </View>
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
