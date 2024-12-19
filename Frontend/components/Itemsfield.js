import * as React from "react";
import { StyleSheet, View } from "react-native";
import ItemsformBase from "./ItemsformBase";
import { Border, Color } from "../GlobalStyles";

const Itemsfield = ({
  appearance = "default",
  isTextarea = false,
  type = "filled",
}) => {
  return (
    <View style={styles.itemsfield}>
      <ItemsformBase state="Filled" text="125, 2nd street, London, 1988	" />
    </View>
  );
};

const styles = StyleSheet.create({
  itemsfield: {
    alignSelf: "stretch",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.surfaceBackground2,
    borderStyle: "solid",
    borderColor: Color.strokePrimary,
    borderWidth: 1,
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Itemsfield;
