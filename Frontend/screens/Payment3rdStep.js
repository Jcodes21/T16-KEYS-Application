import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Frame1 from "../components/Frame1";
import Frame10 from "../components/Frame10";
import { Border, Color, Gap } from "../GlobalStyles";

const Payment3rdStep = () => {
  return (
    <ScrollView style={styles.payment3rdStep}>
      <Frame1 />
      <Frame10 />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  payment3rdStep: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingBottom: 501,
    gap: Gap.gap_10xs,
    maxWidth: "100%",
  },
});

export default Payment3rdStep;
