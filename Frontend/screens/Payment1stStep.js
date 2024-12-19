import * as React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Frame20 from "../components/Frame20";
import Frame21 from "../components/Frame21";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Payment1stStep = () => {
  return (
    <ScrollView style={styles.payment1stStep}>
      <Frame20 />
      <Frame21 />
      <View style={[styles.payment1stStepChild, styles.payment1stBorder]} />
      <View style={styles.payment1stStepItem} />
      <View style={[styles.payment1stStepInner, styles.payment1stBorder]} />
      <Text style={styles.bookedServices}>Booked Services</Text>
      <Text style={[styles.dishwasherInstallation, styles.textTypo2]}>
        Dishwasher Installation
      </Text>
      <Text style={[styles.total, styles.totalTypo]}>Total:</Text>
      <Text style={[styles.tax, styles.textTypo1]}>Tax</Text>
      <Text style={[styles.text, styles.textTypo2]}>£200</Text>
      <Text style={[styles.text1, styles.textTypo]}>£190</Text>
      <Text style={[styles.text2, styles.textTypo1]}>£10</Text>
      <Text style={[styles.discount10, styles.textTypo1]}>Discount (10%)</Text>
      <Text style={[styles.text3, styles.textTypo]}>-20.00</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  payment1stBorder: {
    height: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo2: {
    fontFamily: FontFamily.robotoFlex,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  totalTypo: {
    fontWeight: "700",
    top: 889,
    fontSize: FontSize.headlineRegular_size,
  },
  textTypo1: {
    fontWeight: "500",
    fontSize: FontSize.caption1Medium_size,
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    position: "absolute",
  },
  payment1stStepChild: {
    top: 868,
    left: 34,
    borderTopWidth: 1,
    width: 303,
  },
  payment1stStepItem: {
    top: 714,
    left: 0,
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 220,
    position: "absolute",
  },
  payment1stStepInner: {
    marginLeft: -178.7,
    top: 809,
    left: "50%",
    borderTopWidth: 0.5,
    width: 376,
    opacity: 0.1,
  },
  bookedServices: {
    top: 733,
    fontFamily: FontFamily.robotoFlexRegular,
    opacity: 0.5,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.headlineRegular_size,
    left: 20,
    position: "absolute",
  },
  dishwasherInstallation: {
    fontWeight: "600",
    fontSize: FontSize.caption1Medium_size,
    top: 778,
    fontFamily: FontFamily.robotoFlex,
    left: 20,
  },
  total: {
    fontFamily: FontFamily.robotoFlex,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    left: 20,
  },
  tax: {
    top: 823,
    fontFamily: FontFamily.robotoFlex,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    left: 20,
  },
  text: {
    left: 323,
    fontWeight: "600",
    fontSize: FontSize.caption1Medium_size,
    top: 778,
    fontFamily: FontFamily.robotoFlex,
  },
  text1: {
    left: 321,
    fontWeight: "700",
    top: 889,
    fontSize: FontSize.headlineRegular_size,
  },
  text2: {
    top: 820,
    left: 324,
    fontFamily: FontFamily.robotoFlex,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  discount10: {
    top: 856,
    fontFamily: FontFamily.robotoFlex,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    left: 20,
  },
  text3: {
    top: 853,
    left: 314,
    fontWeight: "500",
    fontSize: FontSize.caption1Medium_size,
  },
  payment1stStep: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default Payment1stStep;
