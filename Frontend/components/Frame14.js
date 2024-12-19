import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import {
  Color,
  Border,
  FontFamily,
  FontSize,
  Padding,
  Gap,
} from "../GlobalStyles";

const Frame14 = () => {
  return (
    <View style={styles.frame}>
      <Text style={styles.serviceType}>Service Type</Text>
      <View style={styles.frame1}>
        <View style={[styles.groupParent, styles.groupBorder]}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group10.png")}
          />
          <Text style={styles.cleaning}>Cleaning</Text>
        </View>
        <View style={[styles.handymanWrapper, styles.groupFlexBox]}>
          <Text style={[styles.handyman, styles.handymanTypo]}>handyman</Text>
        </View>
        <View style={[styles.groupContainer, styles.groupFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-23.png")}
          />
          <View style={[styles.frame2, styles.groupFlexBox]}>
            <Image
              style={styles.groupIcon1}
              resizeMode="cover"
              source={require("../assets/group11.png")}
            />
            <Text style={[styles.repairing, styles.handymanTypo]}>
              Repairing
            </Text>
          </View>
        </View>
        <View style={[styles.groupGroup, styles.groupFlexBox]}>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group12.png")}
          />
          <Text style={styles.handymanTypo}>Carpenter</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupBorder: {
    justifyContent: "flex-end",
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
  },
  groupFlexBox: {
    alignItems: "center",
    height: 73,
  },
  handymanTypo: {
    fontFamily: FontFamily.robotoFlex,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.size_4xs_3,
    color: Color.colorBlack,
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
    left: 0,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_xs,
    paddingRight: 18,
    gap: Gap.gap_16xs,
    height: 73,
    justifyContent: "flex-end",
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    top: 1,
    position: "absolute",
    paddingBottom: 13,
    backgroundColor: Color.colorWhite,
  },
  handyman: {
    width: 44,
  },
  handymanWrapper: {
    left: 87,
    backgroundColor: Color.colorGray_100,
    paddingHorizontal: 0,
    paddingVertical: 12,
    justifyContent: "flex-end",
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    alignItems: "center",
    top: 1,
    position: "absolute",
  },
  frameChild: {
    height: 27,
    width: 28,
  },
  groupIcon1: {
    height: 26,
    width: 28,
  },
  repairing: {
    width: 45,
  },
  frame2: {
    paddingLeft: Padding.p_sm,
    paddingTop: 14,
    paddingRight: 14,
    paddingBottom: 14,
    gap: Gap.gap_15xs,
    justifyContent: "flex-end",
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  groupContainer: {
    top: 0,
    left: 110,
    width: 138,
    flexDirection: "row",
    gap: Gap.gap_7xl,
    alignItems: "center",
    position: "absolute",
  },
  groupIcon2: {
    width: 25,
    height: 24,
  },
  groupGroup: {
    left: 261,
    paddingLeft: 16,
    paddingTop: 15,
    paddingRight: Padding.p_mid,
    paddingBottom: 15,
    gap: Gap.gap_14xs,
    justifyContent: "flex-end",
    width: 73,
    borderWidth: 0.6,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    borderRadius: Border.br_6xs_9,
    alignItems: "center",
    top: 1,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  frame1: {
    height: 74,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frame: {
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_xl,
    gap: Gap.gap_11xs,
    paddingBottom: 13,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    alignSelf: "stretch",
  },
});

export default Frame14;
