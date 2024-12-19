import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Frame2 from "./Frame2";
import { FontSize, FontFamily, Color, Border, Gap } from "../GlobalStyles";

const Frame13 = () => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <Frame2 addPhoto="Add photo" />
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons4.png")}
        />
        <Text style={styles.chooseFromGallery}>Choose from Gallery</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  icons: {
    width: 28,
    height: 25,
  },
  chooseFromGallery: {
    fontSize: FontSize.size_smi_6,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "left",
    width: 127,
  },
  frame1: {
    borderRadius: Border.br_9xs_2,
    backgroundColor: Color.colorLavender,
    width: 229,
    height: 43,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 10,
    gap: Gap.gap_6xs,
  },
  frame: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    gap: Gap.gap_17xl,
  },
});

export default Frame13;
