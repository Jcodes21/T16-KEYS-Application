import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import Frame3 from "../components/Frame3";
import {
  Border,
  Color,
  FontSize,
  Gap,
  FontFamily,
  Padding,
} from "../GlobalStyles";

const Categories = () => {
  return (
    <View style={styles.categories}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Image
            style={styles.arrowPrevSmallIcon}
            resizeMode="cover"
            source={require("../assets/arrowprevsmall.png")}
          />
          <Text style={styles.categories1}>Categories</Text>
        </View>
        <View style={styles.frameChild} />
      </View>
      <View style={styles.frame2}>
        <View style={[styles.groupParent, styles.frameViewLayout]}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group19.png")}
          />
          <Text style={[styles.cleaning, styles.handymanTypo]}>Cleaning</Text>
        </View>
        <View style={[styles.groupGroup, styles.frameGroupSpaceBlock]}>
          <Image
            style={styles.groupIcon1}
            resizeMode="cover"
            source={require("../assets/group20.png")}
          />
          <Text style={[styles.repairing, styles.handymanTypo]}>Repairing</Text>
        </View>
        <View style={[styles.groupContainer, styles.frameGroupSpaceBlock]}>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/group-26.png")}
          />
          <Text
            style={[styles.handyman, styles.handymanTypo]}
          >{`Handyman `}</Text>
        </View>
      </View>
      <View style={styles.frame2}>
        <View style={[styles.frameView, styles.frameViewLayout]}>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group21.png")}
          />
          <Text style={[styles.carpenter, styles.handymanTypo]}>Carpenter</Text>
        </View>
        <View style={[styles.frame4, styles.frameGroupSpaceBlock]}>
          <Image
            style={styles.groupIcon1}
            resizeMode="cover"
            source={require("../assets/group22.png")}
          />
          <Text style={[styles.repairing, styles.handymanTypo]}>Repairing</Text>
        </View>
        <View style={[styles.frame5, styles.frameGroupSpaceBlock]}>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/group-27.png")}
          />
          <Text
            style={[styles.handyman1, styles.handymanTypo]}
          >{`Handyman `}</Text>
        </View>
      </View>
      <Frame3
        group={require("../assets/group23.png")}
        group1={require("../assets/group24.png")}
        group427321932={require("../assets/group-28.png")}
        more="Handyman "
        groupIconWidth={37}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameViewLayout: {
    paddingBottom: 17,
    justifyContent: "flex-end",
    width: 97,
    borderRadius: Border.br_3xs_1,
    height: 96,
    backgroundColor: Color.colorWhite,
  },
  handymanTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
  },
  frameGroupSpaceBlock: {
    gap: Gap.gap_10xs,
    paddingBottom: 16,
    paddingTop: 16,
    justifyContent: "flex-end",
    borderRadius: Border.br_3xs_1,
    height: 96,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
  },
  arrowPrevSmallIcon: {
    width: 24,
    height: 24,
  },
  categories1: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.robotoFlex,
  },
  frame1: {
    top: 52,
    left: 20,
    width: 153,
    height: 26,
    gap: Gap.gap_3xs,
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    overflow: "hidden",
  },
  frameChild: {
    top: 90,
    left: 0,
    borderStyle: "solid",
    borderColor: "#f1f4fa",
    borderTopWidth: 1,
    width: 376,
    height: 1,
    position: "absolute",
  },
  frame: {
    width: 375,
    height: 100,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  groupIcon: {
    width: 45,
    height: 42,
  },
  cleaning: {
    fontFamily: FontFamily.robotoMedium,
    width: 47,
  },
  groupParent: {
    paddingLeft: Padding.p_6xl,
    paddingTop: Padding.p_base,
    paddingRight: 25,
    gap: Gap.gap_14xs,
  },
  groupIcon1: {
    height: 35,
    width: 37,
  },
  repairing: {
    width: 50,
    fontFamily: FontFamily.robotoFlex,
  },
  groupGroup: {
    paddingRight: 23,
    paddingLeft: 23,
    width: 96,
    paddingBottom: 16,
    paddingTop: 16,
  },
  frameItem: {
    height: 36,
    width: 37,
  },
  handyman: {
    width: 62,
    fontFamily: FontFamily.robotoFlex,
  },
  groupContainer: {
    paddingLeft: Padding.p_lg_2,
    paddingRight: Padding.p_mid,
    paddingBottom: 16,
    paddingTop: 16,
    width: 97,
  },
  frame2: {
    width: 324,
    gap: Gap.gap_5xs,
    height: 96,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  groupIcon2: {
    width: 34,
    height: 32,
  },
  carpenter: {
    width: 52,
    fontFamily: FontFamily.robotoFlex,
  },
  frameView: {
    paddingLeft: Padding.p_4xl,
    paddingTop: 17,
    paddingRight: 22,
    gap: Gap.gap_9xs,
    alignItems: "center",
  },
  frame4: {
    paddingRight: 23,
    paddingLeft: 23,
    width: 96,
    paddingBottom: 16,
    paddingTop: 16,
    overflow: "hidden",
  },
  handyman1: {
    width: 59,
    fontFamily: FontFamily.robotoFlex,
  },
  frame5: {
    paddingLeft: Padding.p_mid_2,
    paddingRight: Padding.p_2xl,
    paddingBottom: 16,
    paddingTop: 16,
    width: 97,
    overflow: "hidden",
  },
  categories: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    width: "100%",
    height: 812,
    gap: Gap.gap_7xs,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Categories;
