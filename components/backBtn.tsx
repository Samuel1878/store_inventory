import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from "@/styles/Colors";
export default function BackButton ({name}) {
    const back =() => {
        if(name){
            router.replace(name)
        }
        router.back()
    }
    return (
        <TouchableOpacity onPress={back} style={{position:"absolute",top:40,left:20,padding:5}}>
            <MaterialIcons name="keyboard-backspace" size={28} color={Colors.text} />
        </TouchableOpacity>
    )
}