import * as React from "react";
import { StyleSheet, View } from "react-native";
import ItemsformTitle from "./ItemsformTitle";
import Itemsfield from "./Itemsfield";
import { Padding, Gap } from "../GlobalStyles";

const Form = ({ isError = false }) => {
  return (
    <View style={styles.form}>
      <ItemsformTitle type="Title" title="Address" />
      <Itemsfield appearance="default" isTextarea={false} type="filled" />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignSelf: "stretch",
    overflow: "hidden",
    padding: Padding.p_xs,
    gap: Gap.gap_13xs,
  },
});

export default Form;
