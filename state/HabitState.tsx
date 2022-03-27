import {proxy} from "valtio";

let habitInit = { id: 0}
export const habitIdState = proxy(habitInit)

let habitListStateInit = { habitList: []}


export const habitListState = proxy(habitListStateInit)