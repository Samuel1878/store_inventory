import { ActivityIndicator, View } from "react-native"
import { BlurView } from 'expo-blur';
import { Colors } from "@/styles/Colors";

const Loading = ({loading}) => { 
      if (!loading) return null;

    return (
        <BlurView
          intensity={50}
          tint="dark"
          style={{
            zIndex: 999,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            flex:1,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <View
            style={{
              width: 65,
              height: 65,
              borderRadius: 5,
              backgroundColor: Colors.bg_light,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size={"small"} color={Colors.primary} />
          </View>
        </BlurView>
    );
}
export default Loading