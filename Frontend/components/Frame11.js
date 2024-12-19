import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Gap, Padding } from "../GlobalStyles";

const Frame11 = () => {
  return (
    <View style={[styles.frame, styles.frameLayout]}>
      <View style={[styles.frame1, styles.frameLayout]}>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <Text style={[styles.totalAmount, styles.textTypo]}>
            Total Amount
          </Text>
          <Text style={[styles.text, styles.textTypo]}>£190</Text>
        </View>
        <View style={[styles.frame3, styles.frameFlexBox]}>
          <View style={[styles.frame4, styles.frameFlexBox]}>
            <Text style={[styles.amountPaid, styles.text1Typo]}>
              Amount paid
            </Text>
            <Text style={[styles.text1, styles.text1Typo]}>£190</Text>
          </View>
          <View style={[styles.frame4, styles.frameFlexBox]}>
            <Text style={[styles.amountPaid, styles.text1Typo]}>
              Remaining Amount
            </Text>
            <Text style={[styles.text1, styles.text1Typo]}>£0</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 375,
    overflow: "hidden",
  },
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  textTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.robotoFlex,
    fontWeight: "700",
    fontSize: FontSize.headlineRegular_size,
  },
  text1Typo: {
    fontWeight: "500",
    color: Color.colorGray_300,
    fontFamily: FontFamily.robotoFlex,
    fontSize: FontSize.headlineRegular_size,
  },
  totalAmount: {
    textAlign: "left",
  },
  text: {
    textAlign: "right",
  },
  frame2: {
    height: 19,
    gap: Gap.gap_16xl,
    flexDirection: "row",
    alignItems: "center",
    width: 335,
  },
  amountPaid: {
    textAlign: "left",
  },
  text1: {
    textAlign: "right",
  },
  frame4: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  frame3: {
    gap: Gap.gap_13xs,
    width: 335,
  },
  frame1: {
    backgroundColor: Color.colorWhite,
    height: 128,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_xl,
    paddingBottom: Padding.p_6xl,
    gap: Gap.gap_8xs,
    overflow: "hidden",
  },
  frameIcon: {
    width: 269,
    height: 162,
    overflow: "hidden",
  },
  frame: {
    height: 331,
    gap: Gap.gap_8xl,
    overflow: "hidden",
  },
});

export default Frame11;
