import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  Color,
  Border,
  FontFamily,
  FontSize,
  Padding,
  Gap,
} from "../GlobalStyles";

const Frame24 = () => {
  return (
    <View style={styles.frame}>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group28.png")}
        />
        <Text style={styles.cleaning}>Cleaning</Text>
      </View>
      <View style={[styles.handymanWrapper, styles.groupFlexBox]}>
        <Text style={[styles.handyman, styles.handymanTypo]}>Handyman</Text>
      </View>
      <View style={[styles.groupGroup, styles.groupFlexBox]}>
        <Image
          style={styles.groupIcon1}
          resizeMode="cover"
          source={require("../assets/group29.png")}
        />
        <Text style={styles.handymanTypo}>Carpenter</Text>
      </View>
      <Text style={styles.serviceType}>Service Type</Text>
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <View style={[styles.frame1, styles.groupFlexBox]}>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/group-210.png")}
          />
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group30.png")}
          />
        </View>
        <Text style={[styles.repairing, styles.handymanTypo]}>Repairing</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    justifyContent: "flex-end",
    height: 73,
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    top: 50,
  },
  groupFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  handymanTypo: {
    fontFamily: FontFamily.robotoFlex,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "500",
    fontSize: FontSize.size_4xs_3,
  },
  frameChildLayout: {
    height: 73,
    position: "absolute",
  },
  groupIcon: {
    width: 34,
    height: 32,
  },
  cleaning: {
    fontFamily: FontFamily.robotoMedium,
    width: 36,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.size_4xs_3,
    color: Color.colorBlack,
  },
  groupParent: {
    paddingLeft: Padding.p_lgi,
    paddingTop: Padding.p_xs,
    paddingRight: 19,
    paddingBottom: 15,
    gap: Gap.gap_18xs,
    left: 20,
    justifyContent: "flex-end",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  handyman: {
    width: 44,
  },
  handymanWrapper: {
    left: 107,
    backgroundColor: Color.colorGray_100,
    paddingHorizontal: 0,
    paddingVertical: 14,
    justifyContent: "flex-end",
    height: 73,
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    top: 50,
  },
  groupIcon1: {
    width: 25,
    height: 24,
  },
  groupGroup: {
    left: 281,
    paddingLeft: 16,
    paddingTop: 14,
    paddingRight: Padding.p_mid,
    paddingBottom: 14,
    gap: Gap.gap_13xs,
    justifyContent: "flex-end",
    height: 73,
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    top: 50,
    backgroundColor: Color.colorWhite,
  },
  serviceType: {
    top: 20,
    fontSize: FontSize.headlineRegular_size,
    fontFamily: FontFamily.robotoFlexRegular,
    textAlign: "left",
    opacity: 0.5,
    color: Color.colorBlack,
    left: 20,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 63,
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    height: 73,
    backgroundColor: Color.colorWhite,
  },
  frameItem: {
    height: 27,
    width: 28,
  },
  groupIcon2: {
    height: 26,
    width: 28,
  },
  frame1: {
    top: 16,
    left: 0,
    width: 114,
    height: 28,
    flexDirection: "row",
    gap: Gap.gap_11xl,
  },
  repairing: {
    top: 49,
    left: 79,
    width: 42,
    position: "absolute",
    fontFamily: FontFamily.robotoFlex,
  },
  rectangleParent: {
    left: 130,
    width: 137,
    height: 73,
    top: 50,
  },
  frame: {
    alignSelf: "stretch",
    height: 136,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame24;
