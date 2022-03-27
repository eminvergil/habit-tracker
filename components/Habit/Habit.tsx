import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {LinearProgress} from "react-native-elements";
import {HabitDomain} from "../../domain/HabitDomain";

interface Props {
    habit: HabitDomain
}

export class Habit extends React.Component<Props> {
    render() {

        let dateDiffInDays = (date1: Date, date2: Date) => {
            const _MS_PER_DAY = (1000 * 60 * 60 * 24)
            let utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())
            let utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate())

            return Math.abs(Math.floor((utc2 - utc1) / _MS_PER_DAY))
        }
        let now = new Date()
        let day = new Date(this.props.habit.CreatedAt)
        let goal = new Date(this.props.habit.EndDate)

        let dayDiff = dateDiffInDays(now,day)
        let goalDiff = dateDiffInDays(goal,day)

        let GetValue = () => {
            return dayDiff / goalDiff;
        }

        return (
            <View style={styles.container}>

                    <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>{this.props.habit.Name}</Text>
                    <LinearProgress value={this.props.habit.Started ? GetValue() : 0} variant="determinate" style={{marginVertical: 20}}/>
                    <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'normal'}}>Goal: {goalDiff} days /
                        Current Day: {dayDiff} / Started: {this.props.habit.Started.toString()}</Text>
                    {/*<Button title="Start" onPress={() => handleStart()} containerStyle={{margin: 10}}/>*/}

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
             borderWidth: 2,
             borderStyle: 'solid',
             borderRadius: 2,
             margin: 5,
             paddingVertical: 5
         }
     });
