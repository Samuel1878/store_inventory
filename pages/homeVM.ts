import { AuthContext } from "@/context/auth/authContext";
import { router } from "expo-router";
import { useContext, useState } from "react";

export const useHomeVM = ()=> {
        const {signOut} = useContext(AuthContext);
        const [open, setOpen] = useState(false);
        const signOutHandler = async () => {
           await signOut();
           router.replace("/login")
        }
        return {
            signOutHandler,
            open,
            setOpen
        }

}