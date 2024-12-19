import * as React from "react";
import { Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Help1 = ({ onHelpPress }) => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.help} onPress={onHelpPress}>
      <Pressable
        style={styles.icon}
        onPress={() => navigation.navigate("Help")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon1.png")}
        />
      </Pressable>
    </Pressable>
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
    left: "4.17%",
    top: "4.17%",
    right: "4.17%",
    bottom: "4.17%",
    width: "91.67%",
    height: "91.67%",
    position: "absolute",
  },
  help: {
    top: 56,
    left: 331,
    width: 24,
    height: 24,
    position: "absolute",
  },
});

export default Help1;
