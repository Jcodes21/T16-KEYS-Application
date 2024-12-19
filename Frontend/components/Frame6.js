import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import {
  Padding,
  Color,
  Border,
  FontSize,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const Frame6 = () => {
  return (
    <View style={styles.frame}>
      <View style={[styles.frame1, styles.frameSpaceBlock]}>
        <Text style={styles.address}>Address:</Text>
        <Text style={styles.ndStreetLondon}>125, 2nd street, London, 1988</Text>
      </View>
      <View style={[styles.frame2, styles.frameSpaceBlock]}>
        <Text style={styles.address}>Service Type</Text>
        <View style={[styles.frame3, styles.frameFlexBox]}>
          <View style={[styles.groupParent, styles.groupParentLayout]}>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group4.png")}
            />
            <Text style={[styles.cleaning, styles.cleaningTypo]}>Cleaning</Text>
          </View>
          <View style={[styles.frame4, styles.frameFlexBox]}>
            <View style={[styles.handymanWrapper, styles.groupParentLayout]}>
              <Text style={[styles.handyman, styles.cleaningTypo]}>
                Handyman
              </Text>
            </View>
            <View style={styles.rectangleParent}>
              <View style={[styles.frameChild, styles.groupLayout]} />
              <View style={[styles.frame5, styles.frameFlexBox]}>
                <Image
                  style={styles.frameItem}
                  resizeMode="cover"
                  source={require("../assets/group-2.png")}
                />
                <Image
                  style={styles.groupIcon1}
                  resizeMode="cover"
                  source={require("../assets/group5.png")}
                />
              </View>
              <Text style={[styles.repairing, styles.cleaningTypo]}>
                Repairing
              </Text>
            </View>
          </View>
          <View style={[styles.groupGroup, styles.groupLayout]}>
            <Image
              style={styles.groupIcon2}
              resizeMode="cover"
              source={require("../assets/group6.png")}
            />
            <Text style={[styles.carpenter, styles.cleaningTypo]}>
              Carpenter
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    width: 375,
  },
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupParentLayout: {
    justifyContent: "flex-end",
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    height: 73,
    backgroundColor: Color.colorWhite,
  },
  cleaningTypo: {
    textAlign: "center",
    fontSize: FontSize.size_4xs_3,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  groupLayout: {
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    height: 73,
    backgroundColor: Color.colorWhite,
  },
  address: {
    fontFamily: FontFamily.robotoFlexRegular,
    opacity: 0.5,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.headlineRegular_size,
  },
  ndStreetLondon: {
    fontFamily: FontFamily.robotoFlex,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.headlineRegular_size,
  },
  frame1: {
    height: 74,
    paddingTop: Padding.p_mini,
    gap: Gap.gap_15xs,
  },
  groupIcon: {
    width: 34,
    height: 31,
  },
  cleaning: {
    fontFamily: FontFamily.robotoMedium,
    width: 36,
  },
  groupParent: {
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_5xs,
    paddingRight: 18,
    paddingBottom: 15,
    gap: Gap.gap_13xs,
  },
  handyman: {
    width: 44,
    fontFamily: FontFamily.robotoFlex,
  },
  handymanWrapper: {
    paddingHorizontal: 0,
    paddingVertical: 14,
    alignItems: "center",
  },
  frameChild: {
    top: 0,
    left: 63,
    position: "absolute",
  },
  frameItem: {
    height: 27,
    width: 28,
  },
  groupIcon1: {
    height: 26,
    width: 28,
  },
  frame5: {
    top: 13,
    left: 0,
    width: 114,
    height: 28,
    gap: Gap.gap_11xl,
    position: "absolute",
  },
  repairing: {
    top: 49,
    left: 79,
    width: 42,
    position: "absolute",
    fontFamily: FontFamily.robotoFlex,
  },
  rectangleParent: {
    width: 137,
    marginLeft: -49,
    height: 73,
  },
  frame4: {
    width: 160,
    height: 73,
    overflow: "hidden",
  },
  groupIcon2: {
    width: 25,
    height: 24,
  },
  carpenter: {
    fontFamily: FontFamily.robotoFlex,
  },
  groupGroup: {
    justifyContent: "center",
    paddingLeft: 16,
    paddingTop: 12,
    paddingRight: Padding.p_mid,
    paddingBottom: 12,
    gap: Gap.gap_9xs,
    alignItems: "center",
  },
  frame3: {
    width: 334,
    gap: Gap.gap_8xs,
    height: 73,
    overflow: "hidden",
  },
  frame2: {
    height: 136,
    paddingTop: Padding.p_xl,
    paddingBottom: 13,
    gap: Gap.gap_10xs,
  },
  frame: {
    height: 218,
    gap: Gap.gap_13xs,
    alignItems: "center",
    overflow: "hidden",
    width: 375,
  },
});

export default Frame6;
