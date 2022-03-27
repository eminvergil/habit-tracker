import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Button, Input, LinearProgress} from "react-native-elements";

export class Habit extends React.Component<{ day: any, goal: any, started: any, setStarted: any, setDay: any}> {
    render() {
        // let {day, goal, started: boolean} = this.props;
        // const [day, setDay] = useState(0)
        // const [goal, setGoal] = useState(0)
        // const [start, setStart] = useState(false)

        let GetValue = () => {
            return this.props.day / this.props.goal;
        }

        const handleStart = () => {
            this.props.setStarted(true)
            let oldDate = Date.now() - 10
            let calculateDate = Math.abs(Date.now() - oldDate)
        }

        return (
            <View style={styles.container}>
                <View >

                    {/*<Input placeholder="days" style={{marginVertical: 10}}*/}
                    {/*       onChangeText={(value) => setGoal(Number(value))}/>*/}

                    <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Smoking</Text>
                    <LinearProgress value={this.props.started ? GetValue() : 0} variant="determinate" style={{marginVertical: 20}}/>
                    <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'normal'}}>Goal: {this.props.goal} days /
                        Current Day: {this.props.day}</Text>
                    {/*<Button title="Start" onPress={() => handleStart()} containerStyle={{margin: 10}}/>*/}
                </View>
            </View>)
    }
}


const styles = StyleSheet.create(
    {
         container: {
             flex: 1,
             backgroundColor: '#fff',
             alignItems: 'center',
             justifyContent: 'center',
         },
     });
