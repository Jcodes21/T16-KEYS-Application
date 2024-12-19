import * as React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Frame2 from "../components/Frame2";
import { Border, Color, Gap } from "../GlobalStyles";

const AddDetails = () => {
  return (
    <View style={styles.addDetails}>
      <Frame2 addPhoto="Details" frameTop={44} rectanglePressableLeft={1} />
      <View style={styles.frame} placeholder="Add Details" />
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: 349,
    overflow: "hidden",
  },
  addDetails: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    width: "100%",
    height: 812,
    gap: Gap.gap_lg,
  },
});

export default AddDetails;
