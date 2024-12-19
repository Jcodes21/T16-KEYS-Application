import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const ItemsMiddle = ({ isAvatar = true, type = "main" }) => {
  return (
    <View style={styles.itemsMiddle}>
      <Text style={styles.title}>Add Address</Text>
      <Image
        style={styles.dropdown20ChevronDown}
        resizeMode="cover"
        source={require("../assets/dropdown-20--chevron-down.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.title3Semibold_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.title3Semibold,
    color: Color.textStrong,
    textAlign: "center",
  },
  dropdown20ChevronDown: {
    width: 20,
    height: 16,
    display: "none",
  },
  itemsMiddle: {
    position: "absolute",
    marginTop: -7,
    marginLeft: -130,
    top: "50%",
    left: "50%",
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Gap.gap_19xs,
  },
});

export default ItemsMiddle;
