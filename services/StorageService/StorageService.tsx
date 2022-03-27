import AsyncStorage from "@react-native-async-storage/async-storage";

export const SetValue = async (key: string, value: string) =>
{
    try
    {
        await AsyncStorage.setItem(key, value)
        return "Message Saved"
    }catch(e){
        return "Error occurred. Ex: " + e
    }
}

export const GetValue = async (key: string) =>
{
    try
    {
        return await AsyncStorage.getItem(key)
    }catch(e)
    {
        return "Error occurred. Ex: " + e
    }
}