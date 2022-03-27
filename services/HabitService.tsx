import {HabitDomain, IHabitDomain} from "../domain/HabitDomain";
import {GetHabits} from "./AxiosService/AxiosService";
import {habitListState} from "../state/HabitState";

export const GetHabit = (createdAt: string, endDate: string, started: boolean, name: string, id: number) =>
{
    let habitDomainInput: IHabitDomain = {createdAt,endDate,started,name,id}
    const habit = new HabitDomain(habitDomainInput)
    return habit;
}

let habitList: HabitDomain[] = [];
export const SetHabitsToState = async () => {
    let response =  await GetHabits()
    let data = response?.data
    for (let datum of data)
    {
        let _hab = GetHabit(datum.createdAt, datum.endDate, datum.started, datum.name, datum.id);
        habitList.push(_hab)
    }

    if(habitList.length > 0)
    {
        // @ts-ignore
        habitListState.habitList = habitList;
        console.log("set finished")
    }
}