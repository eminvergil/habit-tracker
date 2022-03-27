import {GetValue, SetValue} from "./StorageService";

test.skip("sets a value to storage", async () => {
    let response = await SetValue("dummy", "10")
    expect(response).toEqual("Message Saved")
})

describe.skip("storage service", () => {
    test("gets a value from storage", async () => {
        // await SetValue("dummy", "10")
        let val = await GetValue("dummy")
        expect(val).toEqual("10")
    })
})