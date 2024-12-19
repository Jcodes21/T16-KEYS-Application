import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Frame13 from "../components/Frame13";
import { FontSize, FontFamily, Color, Border, Gap } from "../GlobalStyles";

const AddPhotos = () => {
  return (
    <View style={styles.addPhotos}>
      <Frame13 />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-427321866.png")}
        />
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <Image
            style={styles.icons}
            resizeMode="cover"
            source={require("../assets/icons5.png")}
          />
          <Text style={styles.takePhoto}>Take Photo</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
    width: 229,
  },
  frameChild: {
    width: 216,
    height: 162,
  },
  icons: {
    width: 28,
    height: 25,
  },
  takePhoto: {
    fontSize: FontSize.size_smi_6,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "left",
    width: 70,
  },
  frame1: {
    borderRadius: Border.br_9xs_2,
    backgroundColor: Color.colorLavender,
    height: 43,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 10,
    gap: Gap.gap_9xs,
  },
  frame: {
    position: "absolute",
    top: 136,
    left: 73,
    gap: 89,
  },
  addPhotos: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default AddPhotos;
