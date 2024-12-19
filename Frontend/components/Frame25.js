import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Frame25 = () => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <Text style={styles.attachments}>Attachments</Text>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-2880.png")}
        />
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-28811.png")}
        />
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-2882.png")}
        />
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-2883.png")}
        />
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-2884.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  attachments: {
    fontSize: FontSize.headlineRegular_size,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    textAlign: "left",
    opacity: 0.5,
  },
  frameChild: {
    borderRadius: Border.br_9xs_3,
    width: 56,
    height: 56,
  },
  frame1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame: {
    backgroundColor: Color.colorWhite,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    gap: Gap.gap_4xs,
  },
});

export default Frame25;
