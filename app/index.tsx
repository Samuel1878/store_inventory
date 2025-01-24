import { AuthContext } from "@/context/auth/authContext";
import { Href, Redirect, useRootNavigationState } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import  errorHandler from "../hook/errorHandler";
import Loading from "@/components/loading";
import * as Network from 'expo-network';
export default function InitialLoadScreen() {
    console.warn("Init")
//   const rootNavigationState = useRootNavigationState();
//   const networkState = Network.useNetworkState();
  const [initialRoute, setInitialRoute] = useState<Href | null>(null);
    const { uid, isLoading } = useContext(AuthContext);
    console.log(uid)
  const loadInitial = async () => {
    try {
    //   setIsLoading(true);
     
      if (uid) {
        console.log("home")
        setInitialRoute("/home");
      } else {
        console.log("login")
        setInitialRoute("/login");

      }
    } catch (error) {

      errorHandler(error);
    } finally {
    //   setIsLoading(false);
    }
  };
  useEffect(() => {
    loadInitial();
  }, [uid, isLoading]);

  if (isLoading) return <Loading />;
//   if (!rootNavigationState?.key) {
//     return (
//       <View style={styles.container}>
//         <Loading />
//         <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
//       </View>
//     );
//   }
  return <Redirect href={initialRoute} />;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
