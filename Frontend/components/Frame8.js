import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  FontFamily,
  Color,
  FontSize,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Frame8 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.groupParent}>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group7.png")}
        />
        <Text style={styles.cleaning}>Cleaning</Text>
      </View>
      <View style={[styles.groupGroup, styles.groupSpaceBlock]}>
        <Image
          style={styles.groupIcon1}
          resizeMode="cover"
          source={require("../assets/group8.png")}
        />
        <Text style={[styles.repairing, styles.repairingTypo]}>Repairing</Text>
      </View>
      <View style={[styles.groupContainer, styles.frameViewLayout]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-21.png")}
        />
        <Text style={[styles.electrician, styles.repairingTypo]}>
          Electrician
        </Text>
      </View>
      <View style={[styles.frameView, styles.frameViewLayout]}>
        <Image
          style={styles.groupIcon2}
          resizeMode="cover"
          source={require("../assets/group9.png")}
        />
        <Text style={styles.repairingTypo}>Carpenter</Text>
      </View>
      <Text style={styles.serviceType}>Service Type</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupSpaceBlock: {
    paddingBottom: 11,
    paddingTop: 11,
  },
  repairingTypo: {
    fontFamily: FontFamily.robotoFlex,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "500",
    fontSize: FontSize.size_4xs_3,
  },
  frameViewLayout: {
    paddingLeft: 16,
    alignItems: "center",
    height: 73,
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    top: 50,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupIcon: {
    width: 34,
    height: 31,
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
    justifyContent: "flex-end",
    paddingLeft: Padding.p_lgi,
    paddingTop: Padding.p_5xs,
    paddingRight: 19,
    paddingBottom: 15,
    gap: Gap.gap_13xs,
    height: 73,
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    left: 20,
    top: 50,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupIcon1: {
    height: 26,
    width: 28,
  },
  repairing: {
    width: 48,
  },
  groupGroup: {
    left: 107,
    paddingLeft: 13,
    paddingRight: 12,
    gap: Gap.gap_11xs,
    alignItems: "center",
    paddingBottom: 11,
    paddingTop: 11,
    height: 73,
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    top: 50,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  frameChild: {
    height: 27,
    width: 28,
  },
  electrician: {
    width: 42,
  },
  groupContainer: {
    left: 193,
    paddingRight: 16,
    gap: Gap.gap_10xs,
    paddingBottom: 11,
    paddingTop: 11,
  },
  groupIcon2: {
    width: 25,
    height: 24,
  },
  frameView: {
    left: 281,
    justifyContent: "center",
    paddingTop: 12,
    paddingRight: Padding.p_mid,
    paddingBottom: 12,
    gap: Gap.gap_9xs,
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
  frame: {
    top: 310,
    left: 0,
    width: 375,
    height: 136,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
});

export default Frame8;
