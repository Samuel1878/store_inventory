import { Colors, Shadow_View } from "@/styles/Colors";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AuthContext } from "@/context/auth/authContext";
import { useHomeVM } from "./homeVM";
import ModalButton from "@/components/buttonModal";
import { router } from "expo-router";

const HomeScreen = () => {
  const { signOutHandler, open, setOpen } = useHomeVM();
  return (
    <View style={styles.container}>
      <ModalButton
        visible={open}
        hideModal={() => setOpen(false)}
        left="Cancel"
        right="Log Out"
        message={"Are you sure you want to log out? "}
        rightHandler={signOutHandler}
        leftHandler={() => setOpen(false)}
      />
      <View style={styles.top}>
        <View style={styles.profileBox}>
          <Text style={styles.header}>ရွှေညာသား ဆန်</Text>
          <Text>လက်လီ လက်ကား ရောင်းဝယ်ရေး</Text>
        </View>

        {/* <View style={styles.profileBox}>
                    <FontAwesome6 name="user-astronaut" size={64} color={Colors.bg} />
                </View> */}
        <TouchableOpacity onPress={() => setOpen(true)} style={styles.logOut}>
          <Feather name="log-out" size={34} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/buy")}
        >
          <Text style={styles.text}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/sell")}
        >
          <Text style={styles.text}>Sell</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.bottomBox} onPress={() => router.push("/inventory")}>
          <Text style={styles.text}>Inventory</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ textAlign: "center", color: Colors.text, marginTop: 20 }}>
        Version 1.0.0
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  top: {
    height: 180,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 20,
    fontWeight: "800",
  },
  profileBox: {
    padding: 20,
    flex: 1,
    // borderRadius:100,
    // backgroundColor:Colors.bg_dark
  },
  logOut: {
    padding: 20,
  },
  body: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  btn: {
    backgroundColor: Colors.bg_dark,
    height: 150,
    width: "47.5%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    ...Shadow_View
  },
  bottom: {
    width:"100%",
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  bottomBox: {
    height: 220,
    width: "100%",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: Colors.bg_dark,
    ...Shadow_View
  },
  text: {
    fontSize: 20,
    fontWeight: "900",
    color: Colors.text,
  },
});
export default HomeScreen;
