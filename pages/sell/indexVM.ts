import { getTypes } from "@/api/APIS";
import { P } from "@/ulti/logic";
import { useEffect, useState } from "react";

export const useSellVM = () => {
    const [price, setPrice] = useState<number>(0);
    const [cup , setCup] = useState<number>(0);
    const [p , setP] = useState<number>(0);
    const [total,setTotal] = useState<number>(0);
    const [types, setTypes] = useState<any>([]);
    const [type, setType] = useState<any>("");
      useEffect(()=>{
        const getTypesFnc = async () => {
            const response = await getTypes();
   console.log(response)
            if (response?.length) {
             
                setTypes(response)
            }
            
        };
        getTypesFnc()
    },[])
    const sellHandler = async() => {

    };
    // useEffect(()=>{
    //     console.log(p, cup)
    //     if(cup > P && cup> 0 ){
    //         setCup(1) 
    //         setP((prev)=>prev =+ 1)
    //     } else if(cup == P && cup > 0){
    //         setCup(0)
    //         setP((prev)=>prev += 1)
    //     }
    //     p && setTotal((prev)=>prev += (p * P) );
    // },[p, cup])
    return (
        {   total,
            price,
            cup,
            type,
            types,
            p,
            setType,
            setTypes,
            setTotal,
            setPrice,
            setCup,
            setP,
            sellHandler

        }
    )
}