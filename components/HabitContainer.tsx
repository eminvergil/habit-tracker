import {View} from "react-native";
import {useEffect} from "react";
import {SetHabitsToState} from "../services/HabitService";
import {useSnapshot} from "valtio";
import {habitListState} from "../state/HabitState";
import {Habit} from "./Habit/Habit";

const HabitContainer = () => {
    const snap = useSnapshot(habitListState);
    useEffect(() => {
        SetHabitsToState()
    }, [])

    return (
        <View>
            {snap.habitList.map((habit,key) => {
                return <Habit key={key} habit={habit} />
            })}
        </View>
    );
};

export default HabitContainer;