import React, { useMemo } from "react";
import { Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ArrowPrevSmall = ({
  arrowPrevSmallPosition,
  arrowPrevSmallTop,
  arrowPrevSmallLeft,
}) => {
  const arrowPrevSmallStyle = useMemo(() => {
    return {
      ...getStyleValue("position", arrowPrevSmallPosition),
      ...getStyleValue("top", arrowPrevSmallTop),
      ...getStyleValue("left", arrowPrevSmallLeft),
    };
  }, [arrowPrevSmallPosition, arrowPrevSmallTop, arrowPrevSmallLeft]);

  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.arrowPrevSmall, arrowPrevSmallStyle]}
      onPress={() => navigation.navigate("PlaceBooking")}
    >
      <Pressable
        style={styles.icon}
        onPress={() => navigation.navigate("PlaceBooking")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon4.png")}
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
    position: "absolute",
    left: "30.83%",
    top: "22.5%",
    right: "39.17%",
    bottom: "22.5%",
    width: "30%",
    height: "55%",
  },
  arrowPrevSmall: {
    width: 24,
    height: 24,
  },
});

export default ArrowPrevSmall;
