import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Gap, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const Frame18 = () => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <View style={[styles.frame1, styles.frameLayout]}>
        <Image
          style={styles.homeIcon}
          resizeMode="cover"
          source={require("../assets/home.png")}
        />
        <Text style={styles.home}>Home</Text>
      </View>
      <View style={styles.frame2}>
        <Text style={[styles.orders, styles.ordersTypo]}>Orders</Text>
        <Image
          style={styles.withdrawIcon}
          resizeMode="cover"
          source={require("../assets/withdraw.png")}
        />
      </View>
      <View style={[styles.frame3, styles.frameLayout]}>
        <Image
          style={styles.homeIcon}
          resizeMode="cover"
          source={require("../assets/gift.png")}
        />
        <Text style={[styles.promotions, styles.ordersTypo]}>Promotions</Text>
      </View>
      <View style={[styles.frame4, styles.frameFlexBox]}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame6.png")}
        />
        <Text style={[styles.notifications, styles.ordersTypo]}>
          Notifications
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  frameLayout: {
    gap: Gap.gap_15xs,
    height: 41,
    alignItems: "center",
    overflow: "hidden",
  },
  ordersTypo: {
    opacity: 0.3,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  homeIcon: {
    width: 20,
    height: 20,
  },
  home: {
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  frame1: {
    width: 33,
  },
  orders: {
    top: 25,
    left: 0,
    position: "absolute",
    textAlign: "left",
  },
  withdrawIcon: {
    top: 0,
    right: 10,
    width: 16,
    height: 16,
    position: "absolute",
  },
  frame2: {
    width: 37,
    height: 39,
    overflow: "hidden",
  },
  promotions: {
    textAlign: "left",
  },
  frame3: {
    width: 63,
  },
  frameIcon: {
    width: 27,
    height: 24,
    overflow: "hidden",
  },
  notifications: {
    textAlign: "center",
  },
  frame4: {
    width: 69,
    height: 43,
    gap: Gap.gap_16xs,
  },
  frame: {
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 73,
    flexDirection: "row",
    paddingLeft: Padding.p_mid,
    paddingTop: Padding.p_sm,
    paddingRight: Padding.p_mini,
    paddingBottom: Padding.p_sm,
    gap: Gap.gap_10xl,
  },
});

export default Frame18;
