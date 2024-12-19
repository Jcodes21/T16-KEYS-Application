import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Frame15 = () => {
  return (
    <View style={styles.frame}>
      <Text style={styles.services}>Services</Text>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View style={styles.groupParent}>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group13.png")}
            />
            <Text style={styles.cleaning}>Cleaning</Text>
          </View>
          <View style={styles.groupGroup}>
            <Image
              style={styles.groupIcon1}
              resizeMode="cover"
              source={require("../assets/group14.png")}
            />
            <Text style={styles.repairing}>Repairing</Text>
          </View>
          <View style={styles.groupContainer}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-24.png")}
            />
            <Text style={styles.handyman}>{`Handyman `}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  services: {
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "left",
    height: 26,
    marginRight: 258,
  },
  groupIcon: {
    position: "relative",
    width: 45,
    height: 42,
  },
  cleaning: {
    position: "relative",
    fontSize: FontSize.size_2xs,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorBlack,
    textAlign: "center",
    width: 47,
  },
  groupParent: {
    borderRadius: Border.br_3xs_1,
    backgroundColor: Color.colorWhite,
    width: 97,
    height: 96,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: Padding.p_6xl,
    paddingTop: Padding.p_base,
    paddingRight: 25,
    paddingBottom: 17,
    gap: Gap.gap_14xs,
  },
  groupIcon1: {
    position: "relative",
    width: 37,
    height: 35,
  },
  repairing: {
    position: "relative",
    fontSize: FontSize.size_2xs,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "center",
    width: 50,
  },
  groupGroup: {
    borderRadius: Border.br_3xs_1,
    backgroundColor: Color.colorWhite,
    width: 96,
    height: 96,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: 23,
    paddingTop: 16,
    paddingRight: 23,
    paddingBottom: 16,
    gap: Gap.gap_10xs,
  },
  frameChild: {
    position: "relative",
    width: 37,
    height: 36,
  },
  handyman: {
    position: "relative",
    fontSize: FontSize.size_2xs,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "center",
    width: 62,
  },
  groupContainer: {
    borderRadius: Border.br_3xs_1,
    backgroundColor: Color.colorWhite,
    width: 97,
    height: 96,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: Padding.p_lg_2,
    paddingTop: 16,
    paddingRight: Padding.p_mid,
    paddingBottom: 16,
    gap: Gap.gap_10xs,
  },
  frame2: {
    width: 324,
    height: 96,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_5xs,
  },
  frame1: {
    width: 327,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame: {
    width: 343,
    height: 144,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: Gap.gap_xs,
  },
});

export default Frame15;
