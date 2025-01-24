// import { Modal, Portal } from "react-native-paper";
import { View, Text, Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors, Shadow_View } from "@/styles/Colors";
import { BlurView } from "expo-blur";

const ModalButton = ({
  message,
  left = "Cancel",
  right = "Log out",
  leftHandler,
  rightHandler,
  visible,
  hideModal,
}) => {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent
      onRequestClose={() => hideModal()}
    >
      <BlurView
        style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        intensity={70}
        tint="dark"
      >
        <View style={{width:"90%", alignItems:"center", backgroundColor:Colors.bg_light,paddingBottom:20,borderRadius:10,zIndex:999}}>
          <View
            style={{
              width: "100%",
              height: 80,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              backgroundColor: Colors.primary,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="exclamationcircleo" size={50} color={"#fff"} />
          </View>

          {/* <Text>{header}</Text> */}
          <Text style={{ marginVertical: 15,fontSize:15,fontWeight:"600",color:Colors.text }}>{message}</Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              onPress={leftHandler}
              style={{
                padding: 15,
                width: "40%",
                backgroundColor: Colors.bg_dark,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                ...Shadow_View
              }}
            >
              <Text style={{color:Colors.text}}>{left}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={rightHandler}
              style={{
                padding: 15,
                width: "40%",
                backgroundColor: Colors.primary,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                ...Shadow_View
              }}
            >
              <Text style={{fontWeight:"800"}}>{right}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};
export default ModalButton;
