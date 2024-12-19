import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const ItemsformBase = ({ state = "Empty", text }) => {
  return (
    <View style={styles.itemsformBase}>
      <Text style={styles.text} numberOfLines={1}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.headlineRegular_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.headlineRegular,
    color: Color.textStrong,
    textAlign: "left",
    overflow: "hidden",
  },
  itemsformBase: {
    flex: 1,
    backgroundColor: Color.colorLavender,
    flexDirection: "row",
    padding: Padding.p_xs,
    overflow: "hidden",
  },
});

export default ItemsformBase;
