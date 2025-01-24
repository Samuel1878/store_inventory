import supabase from "@/config/supabase"

export const getTypes = async() => {
    const {data, error } = await supabase.from("Inventory").select("*");
    if(error){
        console.log(error)
        return []
    }
    return data
};
export const addNewType = async (json) => {
    const { error } = await supabase.from("Inventory").insert(json)
    if(error){
        console.log(error)
        return false
    }
    return true
};
export const addInventory = async ({amount, type}:any) => {
    const { error } = await supabase.from("Inventory").update({"amount_cup":amount})
    .eq("value", type)
    if(error){
        console.log(error)
        return false
    }
    return true
};
export const buyAPI = async (json) => {
    const { error} = await supabase.from("Buy_Log").insert(json);
    if(error){
        return false
    }
    return true
};
// export const addNewInventory = async (json) => {
//     const {error} = await supabase.from("Inventory").insert(json);
//     if(error){
//         return false
//     }
//     return true
// }
export const getInventory = async () => {
    const {data, error} = await supabase.from("Inventory").select("*");
    if(error){
        return []
    }
    return data 
}