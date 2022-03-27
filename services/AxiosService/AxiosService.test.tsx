import {GetHabits, InsertHabit} from "./AxiosService";

test("gets habits", async () => {
    let response = await GetHabits()
    expect(response?.data.length).toBeGreaterThan(2)

    let element = response?.data.find((el: { id: number; }) => {
        return el.id == 1;
    });

    expect(element.name).toEqual("test")
    expect(element.started).not.toEqual(false)
})



test("insert habits", async () => {
    let obj = {
        name: "emin test",
        createdAt: new Date().toISOString(),
        started: false,
        endDate: new Date(Date.now() + 10).toISOString()
    }
    let response = await InsertHabit(obj)
    expect(response?.status).toEqual(201)
})
