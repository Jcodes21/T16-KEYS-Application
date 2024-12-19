import * as React from "react";
import { StyleSheet, View } from "react-native";
import Frame19 from "../components/Frame19";
import Card from "../components/Card";
import { Border, Color, Gap } from "../GlobalStyles";

const AddAddress = () => {
  return (
    <View style={styles.addAddress}>
      <Frame19 />
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  addAddress: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    width: "100%",
    height: 812,
    gap: Gap.gap_lg,
  },
});

export default AddAddress;
