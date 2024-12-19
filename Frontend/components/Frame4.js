import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Help1 from "./Help1";
import {
  Color,
  FontFamily,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const Frame4 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frame, styles.frameFlexBox1]}>
      <View style={[styles.frame1, styles.frameBg]}>
        <Help1 onHelpPress={() => navigation.navigate("Help")} />
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <Pressable
            style={styles.arrowPrevSmall}
            onPress={() => navigation.navigate("PlaceBooking")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrowprevsmall.png")}
            />
          </Pressable>
          <Text style={styles.bookingDetail}>Booking Detail</Text>
        </View>
      </View>
      <View style={[styles.frame3, styles.frameBg]}>
        <View style={[styles.frame4, styles.frameFlexBox]}>
          <Text style={[styles.bookingStatus, styles.bookingStatusClr]}>
            Booking Status
          </Text>
          <View style={[styles.frame5, styles.frameFlexBox1]}>
            <Text style={[styles.accepted, styles.acceptedTypo]}>Accepted</Text>
          </View>
        </View>
        <Text style={[styles.weHaveReviewed, styles.bookingStatusClr]}>
          We have reviewed your booking. Our team will contact you soon for
          quotation.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    alignItems: "center",
    overflow: "hidden",
  },
  frameBg: {
    backgroundColor: Color.colorWhite,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  bookingStatusClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  acceptedTypo: {
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  arrowPrevSmall: {
    width: 24,
    height: 24,
  },
  bookingDetail: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    color: Color.colorGray_300,
    width: 149,
    textAlign: "left",
    fontFamily: FontFamily.robotoFlex,
    height: 26,
  },
  frame2: {
    position: "absolute",
    top: 54,
    left: 20,
    width: 191,
    gap: Gap.gap_3xs,
    height: 26,
  },
  frame1: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 99,
  },
  bookingStatus: {
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
  },
  accepted: {
    fontSize: FontSize.size_smi_9,
    color: Color.colorGold,
    textAlign: "center",
  },
  frame5: {
    borderRadius: Border.br_6xl_9,
    borderStyle: "solid",
    borderColor: Color.colorGold,
    borderWidth: 0.9,
    width: 89,
    justifyContent: "center",
    height: 26,
  },
  frame4: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  weHaveReviewed: {
    fontSize: FontSize.size_mini_7,
    lineHeight: 19,
    fontFamily: FontFamily.robotoFlexRegular,
    opacity: 0.5,
    alignSelf: "stretch",
  },
  frame3: {
    paddingLeft: Padding.p_2xl,
    paddingTop: Padding.p_mid,
    paddingRight: Padding.p_xl,
    paddingBottom: Padding.p_mid,
    gap: Gap.gap_9xs,
  },
  frame: {
    width: 375,
    gap: Gap.gap_12xs,
  },
});

export default Frame4;
