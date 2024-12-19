import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const ItemsformTitle = ({ type = "Title", title }) => {
  const getShowHideTitleContainerStyle = () => {
    if (type === "Error") return styles.showHideTitleContainerVar;
  };
  const getTitleText1Style = () => {
    if (type === "Error") return styles.titleText1Var;
  };

  return (
    <View style={[styles.root, getShowHideTitleContainerStyle()]}>
      <Text style={[styles.title, getTitleText1Style()]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  showHideTitleContainerVar: {
    display: "none",
  },
  titleText1Var: {
    fontSize: FontSize.caption1Medium_size,
    lineHeight: 18,
    color: Color.statusAlertMedium,
  },
  title: {
    fontSize: FontSize.bodyMedium_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.bodyMedium,
    color: Color.textSubtle,
    textAlign: "left",
    alignSelf: "stretch",
  },
  root: {
    alignSelf: "stretch",
  },
});

export default ItemsformTitle;
