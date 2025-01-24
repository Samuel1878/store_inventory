import { addInventory, addNewType, buyAPI, getTypes } from "@/api/APIS";
import { B_full, getCurrentDate, getCurrentTime, P } from "@/ulti/logic";
import { useEffect, useState } from "react";

export const useSellVM = () => {
    const [price, setPrice] = useState<number>(0);
    const [b , setB] = useState<number>(0);
    const [p , setP] = useState<number>(0);
    const [type, setType]= useState<any>();
    const [types, setTypes] = useState<any>([]);
    const [isAdd, setIsAdd] = useState<boolean>(false);
    const [ newType , setNewType] = useState<string>("");
    const [loading ,setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<object>({visible:false, status:true});
    const getTypesFnc = async () => {
            const response = await getTypes();
            console.log(response)
            if (response?.length) {

                setTypes(response)
            }
        };
    const write_Log = async(total) => {
                let json = {
                    type :isAdd? newType: type,
                    price:price,
                    amount: total,
                    date:getCurrentDate(),
                    time:getCurrentTime()
                }
               const res = await buyAPI(json)
               console.log(res)
    };
    const buyHandler = async() => {
        console.log(newType, isAdd)
          let total =  ( p * P ) + ((b * 24) * P);
        setLoading(true)
        if (isAdd){
            const response = await addNewType({"value":newType,"amount_cup":total });
            await write_Log(total);
            getTypesFnc()
            setLoading(false);
            return
        } else {
            const d = types?.filter((e)=>type===e?.value)
            const amount = d[0]?.amount_cup + total ;
            console.log(amount, d);
            const response = await addInventory({amount:amount, type:type})
            console.log(response)
            await write_Log(total);
            setLoading(false);
            getTypesFnc();
            return
        }
        
        
    };
    useEffect(()=>{
        
        getTypesFnc()
    },[])
    return (
        { 
            price,
            b,
            p,
            type,
            types,
            isAdd,
            newType,
            loading,
            status, 
            setStatus,
            setLoading,
            setTypes,

            setPrice,
            setType,
            setB,
            setP,
            buyHandler,
            setIsAdd,
            setNewType,
        }
    )
}