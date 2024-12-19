import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame1 = ({ frameAlignSelf, frameWidth, frameHeight }) => {
  const frame1Style = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", frameAlignSelf),
      ...getStyleValue("width", frameWidth),
    };
  }, [frameAlignSelf, frameWidth]);

  const frame2Style = useMemo(() => {
    return {
      ...getStyleValue("height", frameHeight),
    };
  }, [frameHeight]);

  return (
    <View style={[styles.frame, frame1Style]}>
      <View style={[styles.frame1, frame2Style]}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon2.png")}
        />
        <Text style={styles.payments}>Payments</Text>
      </View>
      <Text style={styles.activePayment}> Active payment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "relative",
    width: 7,
    height: 13,
  },
  payments: {
    position: "relative",
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  frame1: {
    alignSelf: "stretch",
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_8xl_4,
    paddingTop: Padding.p_36xl,
    paddingBottom: Padding.p_lgi,
    gap: Gap.gap_xl,
  },
  activePayment: {
    alignSelf: "stretch",
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "left",
    opacity: 0.5,
    height: 19,
    marginLeft: 0,
  },
  frame: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_sm,
  },
});

export default Frame1;
