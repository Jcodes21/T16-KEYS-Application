import * as React from "react";
import { StyleSheet, View } from "react-native";
import ItemsformTitle from "./ItemsformTitle";
import Itemsselect from "./Itemsselect";
import { Color, Padding, Gap } from "../GlobalStyles";

const Select = ({ isError = false }) => {
  return (
    <View style={styles.select}>
      <ItemsformTitle type="Title" title="City" />
      <Itemsselect appearance="default" type="filled" />
      <ItemsformTitle type="Error" title="Text" />
    </View>
  );
};

const styles = StyleSheet.create({
  select: {
    alignSelf: "stretch",
    backgroundColor: Color.colorGhostwhite_100,
    padding: Padding.p_xs,
    gap: Gap.gap_13xs,
  },
});

export default Select;
