import { Colors, Shadow_View } from "@/styles/Colors"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import { useSellVM } from "./indexVM"
import BackButton from "@/components/backBtn"
import formatPrice, { P } from "@/ulti/logic"
import { SelectList } from "react-native-dropdown-select-list"
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const SellScreen = () => {
    const {
        p,
        type,
        types,
        cup,
        price, 
        total,
        setType,
        setTypes,
        setTotal,
        setCup,
        setP,
        setPrice} = useSellVM();
    return (
      <SafeAreaView style={styles.container}>
        <BackButton name={null} />
        <ScrollView
          style={styles.form}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "space-between",
            padding: 15,
            paddingVertical: 20,
          }}
        >
          <View style={styles.top}>
            <SelectList
              // defaultOption={{ key: "1", value: "Waiting for Data" }}
              boxStyles={styles.selector}
              // onSelect={(e) => console.log(e)}
              setSelected={setType}
              data={types}
              inputStyles={{ color: Colors.text }}
              placeholder="Select Type"
              arrowicon={
                <FontAwesome
                  name="chevron-down"
                  size={19}
                  color={Colors.text}
                />
              }
              searchicon={
                <FontAwesome
                  name="search"
                  size={18}
                  color={Colors.primary}
                  style={{ marginRight: 10 }}
                />
              }
              save="value"
              searchPlaceholder="Search"
              closeicon={
                <AntDesign name="close" size={24} color={Colors.primary} />
              }
              dropdownTextStyles={{ color: Colors.text }}
              dropdownStyles={{ borderColor: Colors.text }}
              dropdownItemStyles={{ borderColor: Colors.primary }}
            />
            <View style={styles.amountCon}>
              <TextInput
                label={"ပြည်"}
                mode="outlined"
                value={p}
                inputMode="numeric"
                keyboardType="numeric"
                activeOutlineColor={Colors.primary}
                outlineColor={Colors.text}
                style={{ width: "47.5%", backgroundColor: Colors.bg }}
                onChangeText={(e) => {
                  setP(e || 0);
                  // setTotal((prev)=>prev += parseInt(e * P))
                }}
              />
              <TextInput
                label={"ဗူး"}
                mode="outlined"
                value={cup}
                inputMode="numeric"
                style={{ width: "47.5%" }}
                keyboardType="numeric"
                activeOutlineColor={Colors.primary}
                outlineColor={Colors.text}
                onChangeText={(e) => setCup(e || 0)}
              />
            </View>
            <TextInput
              label={"Price"}
              mode="outlined"
              value={price}
              inputMode="numeric"
              keyboardType="numeric"
              activeOutlineColor={Colors.primary}
              outlineColor={Colors.text}
              onChangeText={(e) => setPrice(e)}
            />
            <View style={styles.data}>
              <View style={styles.rice}>
                <View style={styles.row}>
                  <Text style={styles.txt}>
                    {/* {parseInt(p * P) + parseInt(cup)} */}
                  </Text>
                  <View style={styles.txtCon}>
                    <Text style={styles.txt}>{p} ပြည်</Text>
                  </View>
                  <View style={styles.txtCon}>
                    <Text style={styles.txt}>{cup} ဗူး</Text>
                  </View>
                </View>
              </View>
              <View
                style={[
                  styles.txtCon,
                  { backgroundColor: "none", height: "40%" },
                ]}
              >
                <Text style={styles.txt}>{price}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text>Sell</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    paddingTop: 20,
  },
  form: {
    backgroundColor: Colors.bg_dark,
    // padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    ...Shadow_View,
  },
  amountCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  btn: {
    height: 50,
    width: "100%",
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  data: {
    backgroundColor: Colors.bg,
    width: "100%",
    height: 200,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    ...Shadow_View,
  },
  rice: {
    width: "90%",
    borderBottomColor: Colors.low,
    borderBottomWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    height: "50%",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  txtCon: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "45%",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "rgba(12, 12, 12, 0.3)",
  },
  txt: {
    color: Colors.primary,
    fontSize: 25,
  },
  selector: {
    borderColor: Colors.text,
    backgroundColor: Colors.bg,
    color: Colors.text,
    borderRadius: 5,
  },
});
export default SellScreen;