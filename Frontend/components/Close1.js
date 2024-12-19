import * as React from "react";
import { Pressable, Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Close1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.close}>
      <Pressable
        style={styles.icon}
        onPress={() => navigation.navigate("BookingDetailConfirm1")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon1: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon: {
    left: "12.78%",
    top: "12.78%",
    right: "12.22%",
    bottom: "12.22%",
    width: "75%",
    height: "75%",
    position: "absolute",
  },
  close: {
    top: 28,
    left: 307,
    width: 18,
    height: 18,
    position: "absolute",
  },
});

export default Close1;
