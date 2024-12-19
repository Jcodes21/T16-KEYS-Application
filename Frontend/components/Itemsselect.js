import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import ItemsformBase from "./ItemsformBase";
import { Border, Color } from "../GlobalStyles";

const Itemsselect = ({ appearance = "default", type = "filled" }) => {
  return (
    <View style={styles.itemsselect}>
      <ItemsformBase state="Filled" text="London" />
      <Image
        style={styles.itemsrightIcon}
        resizeMode="cover"
        source={require("../assets/itemsright.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemsrightIcon: {
    width: 44,
    height: 44,
  },
  itemsselect: {
    alignSelf: "stretch",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.surfaceBackground2,
    borderStyle: "solid",
    borderColor: Color.strokePrimary,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 44,
  },
});

export default Itemsselect;
