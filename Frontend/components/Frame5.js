import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Frame from "./Frame";
import { Color, FontSize, FontFamily, Padding, Gap } from "../GlobalStyles";

const Frame5 = () => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Text style={[styles.bookingDate, styles.bookingDateTypo]}>
          Booking Date
        </Text>
        <Text style={[styles.march1200Pm, styles.bookingDateTypo]}>
          20 March 12:00 PM
        </Text>
      </View>
      <Frame />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  bookingDateTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.headlineRegular_size,
  },
  bookingDate: {
    fontFamily: FontFamily.robotoFlexRegular,
    opacity: 0.5,
  },
  march1200Pm: {
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
  },
  frame1: {
    backgroundColor: Color.colorWhite,
    height: 70,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_smi,
    gap: Gap.gap_16xs,
  },
  frame: {
    alignItems: "center",
    gap: Gap.gap_13xs,
  },
});

export default Frame5;
