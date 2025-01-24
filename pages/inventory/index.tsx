import { getInventory } from "@/api/APIS";
import Loading from "@/components/loading";
import { Colors } from "@/styles/Colors"
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const InventoryScreen = () => {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        const fetchInventory = async () => {
            setLoading(true)
           const response = await getInventory();
           setInventory(response);
           setLoading(false)
        }
        fetchInventory()
    },[]);
    const RenderItem = ({item}) => {

        return (
          <View style={styles.itemCon}>
            <Text style={styles.item}>{item.value}</Text>
            <View style={styles.itemRight}>
              <Text> {Math.round((item.amount_cup / 8)/ 24)} အိတ်</Text>
              <Text>{Math.round(item.amount_cup / 8)} ပြည်</Text>
              <Text>{item.amount_cup} ဗူး</Text>
            </View>
          </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <Loading loading={loading}/>
           {inventory && <FlatList
            data={inventory}
            keyExtractor={(item)=>item.id}
            renderItem={RenderItem
            }
            />}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container : {
        flex:1,
         backgroundColor:Colors.bg
    },
    itemCon:{
        padding:10,
        marginHorizontal:10,
        marginVertical:5,
        height:60,
        backgroundColor:Colors.low,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    itemRight:{
        width:"40%",
        flexDirection:"row",
        alignItems:"center",
        gap:10
    }
})
export default InventoryScreen;