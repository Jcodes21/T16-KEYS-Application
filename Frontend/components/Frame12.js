import * as React from "react";
import { Pressable, StyleSheet, Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Gap } from "../GlobalStyles";

const Frame12 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <Pressable style={[styles.frame1, styles.frameFlexBox]} />
      <Pressable
        style={[styles.frame2, styles.frameLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-2828.png")}
        />
        <Text style={[styles.continue, styles.continueFlexBox]}>Continue</Text>
      </Pressable>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <View style={styles.frame4}>
          <View style={[styles.frame5, styles.frameFlexBox]}>
            <Text style={[styles.yourBookingHas, styles.continueFlexBox]}>
              Your Booking has been confirmed
            </Text>
          </View>
          <View style={[styles.frame5, styles.frameFlexBox]}>
            <Text style={styles.thankYouFor}>
              Thank you for using our services.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  frameLayout: {
    height: 83,
    position: "absolute",
  },
  continueFlexBox: {
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    justifyContent: "center",
  },
  frame1: {
    top: 434,
    width: 317,
    alignItems: "flex-end",
    height: 83,
    position: "absolute",
    left: -17,
    justifyContent: "center",
  },
  frameChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_11xl,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  continue: {
    height: "56.63%",
    width: "48.57%",
    top: "12.05%",
    left: "25.51%",
    fontSize: FontSize.size_xl,
    letterSpacing: 0.4,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    alignItems: "flex-end",
    position: "absolute",
  },
  frame2: {
    top: 176,
    left: 67,
    width: 245,
    overflow: "hidden",
  },
  yourBookingHas: {
    fontSize: FontSize.size_7xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    alignItems: "center",
    width: 371,
    height: 65,
  },
  frame5: {
    alignSelf: "stretch",
    alignItems: "flex-end",
  },
  thankYouFor: {
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    alignSelf: "stretch",
    textAlign: "center",
    color: Color.colorBlack,
  },
  frame4: {
    gap: Gap.gap_2xl,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frame3: {
    top: -5,
    width: 396,
    alignItems: "flex-end",
    left: -17,
    justifyContent: "center",
    position: "absolute",
  },
  frame: {
    width: 379,
    height: 517,
    overflow: "hidden",
  },
});

export default Frame12;
