import axios from "axios";

const API_URL = "http://localhost:3000/habits"

export const GetHabits = async () => {
    try
    {
        return await axios(API_URL)
    }
    catch(e)
    {
        console.log("Error occurred in GetHabits. Ex: " , e.message)
    }
}


export const InsertHabit = async (value: any) => {
    try
    {
        return await axios.post(API_URL,value)
    }
    catch(e)
    {
        console.log("Error occurred in InsertHabit. Ex: " , e.message)
    }
}