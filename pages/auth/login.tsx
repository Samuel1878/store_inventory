import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import useLoginVM from "./loginVM"
import { TextInput } from "react-native-paper";
import {Colors} from "../../styles/Colors"
import Loading from "@/components/loading";
const HEIGHT = Dimensions.get('screen').height;
const LoginScreen = () => {
    const {
        error,
        email,
        password,
        loading,
        setEmail,
        clearError,
        setLoading,
        setPassword,
        signInWithEmail
    } = useLoginVM()
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Loading loading={loading} />
          <View style={styles.box}>
            <View style={{}}>
              <Text style={styles.title}>Login</Text>
              <TextInput
                label="Email"
                mode="outlined"
                onFocus={clearError}
                value={email}
                activeOutlineColor={Colors.primary}
                outlineColor="#d5d5d5"
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                mode="outlined"
                onFocus={clearError}
                label="Password"
                activeOutlineColor={Colors.primary}
                outlineColor="#d5d5d5"
                value={password}
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
              />
              {error && (
                <Text style={{ color: "red", textAlign: "center" }}>
                  {error}
                </Text>
              )}
            </View>

            <TouchableOpacity
              disabled={!password || !email}
              style={styles.btn}
              onPress={signInWithEmail}
            >
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:Colors.bg
    
    },
    box:{
        // width:"100%",
        height:HEIGHT-150,
        paddingTop:50,
        // flex:1,
        backgroundColor:Colors.bg,
        marginHorizontal:20,
        justifyContent:'space-between'
    },
    input:{
        marginVertical:10
    },
    title:{
        fontSize:20,
        textAlign:"center",
        marginVertical:10,
        color:Colors.text
    },
    btn:{
        height:45,
        width:"100%",
        backgroundColor:Colors.primary,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
        
    }
})
export default LoginScreen