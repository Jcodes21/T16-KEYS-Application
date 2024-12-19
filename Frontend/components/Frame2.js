import React, { useMemo } from "react";
import { Text, StyleSheet, Pressable, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame2 = ({ addPhoto, frameTop, rectanglePressableLeft }) => {
  const frame3Style = useMemo(() => {
    return {
      ...getStyleValue("top", frameTop),
    };
  }, [frameTop]);

  const rectanglePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("left", rectanglePressableLeft),
    };
  }, [rectanglePressableLeft]);

  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <Text style={[styles.addPhoto, styles.saveTypo]}>{addPhoto}</Text>
      <Pressable
        style={styles.arrowPrevSmall}
        onPress={() => navigation.navigate("PlaceBooking")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrowprevsmall.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame1, styles.frameLayout, frame3Style]}
        onPress={() => navigation.navigate("PlaceBooking")}
      >
        <Pressable
          style={[
            styles.frameChild,
            styles.frameLayout,
            rectanglePressableStyle,
          ]}
          onPress={() => navigation.navigate("BookingDetailPending")}
        />
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  saveTypo: {
    fontFamily: FontFamily.robotoFlex,
    position: "absolute",
  },
  frameLayout: {
    height: 33,
    width: 72,
    position: "absolute",
  },
  addPhoto: {
    marginLeft: -125.5,
    top: "52%",
    left: "50%",
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    color: Color.colorGray_300,
    textAlign: "left",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  arrowPrevSmall: {
    left: 20,
    top: 53,
    width: 24,
    height: 24,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_9xs_5,
    backgroundColor: Color.colorGold,
  },
  save: {
    top: "24.46%",
    left: "29.58%",
    fontSize: FontSize.size_sm_9,
    fontWeight: "500",
    color: Color.colorBlack,
    textAlign: "center",
  },
  frame1: {
    top: 47,
    left: 277,
    overflow: "hidden",
  },
  frame: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 100,
    overflow: "hidden",
  },
});

export default Frame2;
