import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Frame3 from "./Frame3";
import {
  Color,
  FontFamily,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const Frame17 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View style={styles.groupParent}>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group15.png")}
            />
            <Text style={[styles.carpenter, styles.handymanTypo]}>
              Carpenter
            </Text>
          </View>
          <View style={[styles.frame3, styles.frameSpaceBlock]}>
            <Image
              style={styles.groupIcon1}
              resizeMode="cover"
              source={require("../assets/group16.png")}
            />
            <Text style={[styles.repairing, styles.handymanTypo]}>
              Repairing
            </Text>
          </View>
          <View style={[styles.frame4, styles.frameSpaceBlock]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-25.png")}
            />
            <Text
              style={[styles.handyman, styles.handymanTypo]}
            >{`Handyman `}</Text>
          </View>
        </View>
      </View>
      <View style={styles.frame1}>
        <Frame3
          group={require("../assets/group17.png")}
          group1={require("../assets/group18.png")}
          group427321932={require("../assets/group-427321932.png")}
          more="More "
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  handymanTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoFlex,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
  },
  frameSpaceBlock: {
    gap: Gap.gap_10xs,
    paddingBottom: 16,
    paddingTop: 16,
    justifyContent: "flex-end",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs_1,
    height: 96,
    alignItems: "center",
    overflow: "hidden",
  },
  groupIcon: {
    width: 34,
    height: 32,
  },
  carpenter: {
    width: 52,
  },
  groupParent: {
    paddingLeft: Padding.p_4xl,
    paddingTop: 17,
    paddingRight: 22,
    paddingBottom: 17,
    gap: Gap.gap_9xs,
    justifyContent: "flex-end",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs_1,
    width: 97,
    height: 96,
    alignItems: "center",
  },
  groupIcon1: {
    height: 35,
    width: 37,
  },
  repairing: {
    width: 50,
  },
  frame3: {
    width: 96,
    paddingLeft: 23,
    paddingRight: 23,
  },
  frameChild: {
    height: 36,
    width: 37,
  },
  handyman: {
    width: 59,
  },
  frame4: {
    paddingLeft: Padding.p_mid_2,
    paddingRight: Padding.p_2xl,
    width: 97,
    gap: Gap.gap_10xs,
    paddingBottom: 16,
    paddingTop: 16,
  },
  frame2: {
    width: 324,
    flexDirection: "row",
    gap: Gap.gap_5xs,
    height: 96,
    alignItems: "center",
    overflow: "hidden",
  },
  frame1: {
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
    width: 327,
  },
  frame: {
    height: 206,
    paddingBottom: 0,
    gap: Gap.gap_7xs,
    alignItems: "center",
    overflow: "hidden",
    width: 327,
  },
});

export default Frame17;
