import { useContext, useState } from "react"
import supabase from "../../config/supabase"
import errorHandler from "@/hook/errorHandler";
import { AuthContext } from "@/context/auth/authContext";
import { router } from "expo-router";
const useLoginVM = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const {signIn} = useContext(AuthContext);
    const clearError = () => setError(null)
    async function signInWithEmail() {
        clearError()
        setLoading(true)
        try{
       console.log(email, password)
        const { data:{session} ,error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
        })
        if(error){
            return setError("Email or Password is incorrect");
        }
        console.log(session)
        signIn(session.access_token);
        router.push("/home")
        setLoading(false)}
        catch(error){
            setError("Something went wrong please try again later")
            console.log(errorHandler(error), error)
        }
        finally{
            setLoading(false);
        }
    }
    return( {
        error,
        email,
        password,
        loading,
        clearError,
        setLoading,
        setEmail,
        setPassword,
        signInWithEmail
    }
)
}
export default useLoginVM