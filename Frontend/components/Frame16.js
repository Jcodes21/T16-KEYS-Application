import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontSize, FontFamily, Gap, Border } from "../GlobalStyles";

const Frame16 = () => {
  return (
    <View style={styles.frame}>
      <View style={[styles.frameChild, styles.frameIconPosition]} />
      <View style={[styles.frame1, styles.framePosition]}>
        <Text style={styles.inputText}>Local</Text>
      </View>
      <Image
        style={[styles.frameIcon, styles.frameIconPosition]}
        resizeMode="cover"
        source={require("../assets/frame4.png")}
      />
      <View style={[styles.frame2, styles.frame2Layout]}>
        <View style={[styles.parent, styles.frame2Layout]}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/941.png")}
          />
          <Image
            style={styles.rightSideIcon}
            resizeMode="cover"
            source={require("../assets/right-side.png")}
          />
        </View>
      </View>
      <View style={[styles.frame3, styles.framePosition]}>
        <View style={styles.frameItem} />
      </View>
      <Image
        style={[styles.frameIcon1, styles.frameIconPosition]}
        resizeMode="cover"
        source={require("../assets/frame5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconPosition: {
    top: 0,
    position: "absolute",
  },
  framePosition: {
    justifyContent: "flex-end",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame2Layout: {
    width: 342,
    alignItems: "center",
  },
  frameChild: {
    left: 0,
    backgroundColor: Color.colorGold,
    height: 198,
    width: 375,
  },
  inputText: {
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.bodyMedium,
    color: Color.textStrong,
    textAlign: "center",
    width: 280,
  },
  frame1: {
    left: 45,
    height: 165,
    alignItems: "center",
    justifyContent: "flex-end",
    width: 280,
  },
  frameIcon: {
    left: 329,
    width: 20,
    height: 113,
    overflow: "hidden",
  },
  icon: {
    width: 28,
    height: 11,
  },
  rightSideIcon: {
    width: 67,
    height: 11,
  },
  parent: {
    height: 12,
    flexDirection: "row",
    gap: Gap.gap_18xl,
  },
  frame2: {
    left: 17,
    height: 23,
    justifyContent: "flex-end",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameItem: {
    borderRadius: Border.br_10xs,
    height: 46,
    opacity: 0.1,
    width: 44,
  },
  frame3: {
    left: 307,
    width: 44,
    alignItems: "center",
    justifyContent: "flex-end",
    height: 227,
  },
  frameIcon1: {
    left: 91,
    width: 190,
    height: 131,
    overflow: "hidden",
  },
  frame: {
    overflow: "hidden",
    height: 227,
    width: 375,
  },
});

export default Frame16;
