import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import {
  Gap,
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const Frame22 = () => {
  return (
    <View style={styles.frame}>
      <Text style={styles.serviceType}>Service Type</Text>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={styles.groupParent}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group25.png")}
          />
          <Text style={styles.cleaning}>Cleaning</Text>
        </View>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <View style={styles.frameChild} />
          <View style={styles.frameParent}>
            <View style={[styles.frame3, styles.framePosition]}>
              <Image
                style={styles.frameItem}
                resizeMode="cover"
                source={require("../assets/group-29.png")}
              />
              <Text style={[styles.handyman, styles.handymanTypo]}>
                Handyman
              </Text>
            </View>
            <View style={[styles.frame4, styles.groupLayout]}>
              <Image
                style={styles.groupIcon1}
                resizeMode="cover"
                source={require("../assets/group26.png")}
              />
              <Text style={[styles.repairing, styles.handymanTypo]}>
                Repairing
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupGroup, styles.groupLayout]}>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group27.png")}
          />
          <Text style={styles.handymanTypo}>Carpenter</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    height: 73,
    overflow: "hidden",
  },
  framePosition: {
    gap: Gap.gap_14xs,
    position: "absolute",
    overflow: "hidden",
  },
  handymanTypo: {
    fontFamily: FontFamily.robotoFlex,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.size_4xs_3,
    color: Color.colorBlack,
  },
  groupLayout: {
    paddingTop: 14,
    paddingBottom: 14,
    justifyContent: "flex-end",
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    alignItems: "center",
    height: 73,
    backgroundColor: Color.colorWhite,
  },
  serviceType: {
    fontSize: FontSize.headlineRegular_size,
    fontFamily: FontFamily.robotoFlexRegular,
    textAlign: "left",
    opacity: 0.5,
    color: Color.colorBlack,
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
    paddingLeft: Padding.p_3xl,
    paddingTop: Padding.p_xs,
    paddingRight: 16,
    gap: Gap.gap_17xs,
    paddingBottom: 14,
    justifyContent: "flex-end",
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    height: 73,
    backgroundColor: Color.colorWhite,
  },
  frameChild: {
    backgroundColor: Color.colorGray_100,
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    height: 73,
  },
  frameItem: {
    height: 27,
    width: 28,
  },
  handyman: {
    width: 46,
  },
  frame3: {
    top: 14,
    left: -6,
    height: 45,
    width: 46,
    alignItems: "center",
  },
  groupIcon1: {
    height: 26,
    width: 28,
  },
  repairing: {
    width: 42,
  },
  frame4: {
    top: 0,
    left: 66,
    paddingLeft: 17,
    paddingRight: 15,
    gap: Gap.gap_14xs,
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    width: 140,
    marginLeft: -52,
    height: 73,
  },
  frame2: {
    width: 160,
    alignItems: "center",
  },
  groupIcon2: {
    width: 25,
    height: 24,
  },
  groupGroup: {
    paddingLeft: 16,
    paddingRight: Padding.p_mid,
    gap: Gap.gap_13xs,
  },
  frame1: {
    width: 334,
    gap: Gap.gap_8xs,
    alignItems: "center",
  },
  frame: {
    width: 375,
    height: 136,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: 13,
    gap: Gap.gap_10xs,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame22;
