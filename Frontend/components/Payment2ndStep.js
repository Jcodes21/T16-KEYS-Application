import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Frame1 from "./Frame1";
import Frame26 from "./Frame26";
import { Border, Color, Gap } from "../GlobalStyles";

const Payment2ndStep = () => {
  return (
    <View style={styles.payment2ndStep}>
      <Frame1 frameAlignSelf="unset" frameWidth={375} frameHeight={100} />
      <Frame26 />
    </View>
  );
};

const styles = StyleSheet.create({
  payment2ndStep: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite_100,
    width: 375,
    height: 1214,
    alignItems: "center",
    paddingBottom: 549,
    gap: Gap.gap_10xs,
  },
});

export default Payment2ndStep;
