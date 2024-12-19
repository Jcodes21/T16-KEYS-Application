import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import Frame11 from "../components/Frame11";
import Frame12 from "../components/Frame12";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const ConfirmationPage = () => {
  return (
    <ScrollView style={styles.confirmationPage}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Text style={styles.payments}>Payments</Text>
        </View>
        <Text style={styles.paymentsSummary}> Payments summary</Text>
      </View>
      <View style={styles.frame2}>
        <Frame11 />
        <Frame12 />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    height: 100,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 62,
    paddingVertical: Padding.p_lgi,
  },
  paymentsSummary: {
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
    gap: 99,
  },
  frame2: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: 60,
  },
  confirmationPage: {
    position: "relative",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 78,
    gap: Gap.gap_11xs,
    maxWidth: "100%",
  },
});

export default ConfirmationPage;
