import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Pressable,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Help1 from "../components/Help1";
import Frame8 from "../components/Frame8";
import Frame from "../components/Frame";
import {
  FontFamily,
  Padding,
  Color,
  FontSize,
  Border,
  Gap,
} from "../GlobalStyles";

const BookingDetailConfirm1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.bookingDetailConfirm}>
      <Text
        style={[styles.weHaveAdded, styles.weHaveAddedLayout]}
      >{`We have added  items and prices in your Booking. 
Kindly confirm by tapping \`Confirm Details\` button.`}</Text>
      <Image
        style={styles.icons}
        resizeMode="cover"
        source={require("../assets/icons.png")}
      />
      <Pressable
        style={[styles.bookingDetailConfirmChild, styles.weHaveAddedLayout]}
        onPress={() => navigation.navigate("Payment1stStep")}
      />
      <Text style={styles.continue}>Continue</Text>
      <View style={[styles.frame, styles.framePosition1]}>
        <Help1 />
        <View style={[styles.frame1, styles.frameFlexBox]}>
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
      <View style={[styles.frame2, styles.frameLayout]}>
        <View style={[styles.frame3, styles.frameFlexBox]}>
          <Text style={[styles.bookingStatus, styles.acceptedTypo]}>
            Booking Status
          </Text>
          <View style={styles.frame4}>
            <Text style={[styles.accepted, styles.acceptedTypo]}>Accepted</Text>
          </View>
        </View>
        <Text style={[styles.weHaveReviewed, styles.addressTypo]}>
          We have reviewed your booking. Our team will contact you soon for
          quotation.
        </Text>
      </View>
      <View style={[styles.frame5, styles.framePosition]}>
        <Text style={[styles.address, styles.addressTypo]}>Address:</Text>
        <Text style={[styles.bookingStatus, styles.acceptedTypo]}>
          125, 2nd street, London, 1988
        </Text>
      </View>
      <Frame8 />
      <View style={[styles.frame6, styles.framePosition]}>
        <Text style={[styles.address, styles.addressTypo]}>Booking Date</Text>
        <Text style={[styles.bookingStatus, styles.acceptedTypo]}>
          20 March 12:00 PM
        </Text>
      </View>
      <Frame
        frameAlignSelf="unset"
        framePosition="absolute"
        frameTop={532}
        frameLeft={0}
        frameWidth={375}
      />
      <View style={[styles.frame7, styles.frameBorder]}>
        <View style={[styles.frameChild, styles.frameBorder]} />
        <View style={styles.frame8}>
          <Text style={[styles.markEdwards, styles.acceptedTypo]}>
            Mark Edwards
          </Text>
        </View>
        <Text style={[styles.installer, styles.addressTypo]}>Installer</Text>
        <Image
          style={[styles.frameIcon, styles.framePosition1]}
          resizeMode="cover"
          source={require("../assets/frame1.png")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  weHaveAddedLayout: {
    width: 335,
    position: "absolute",
  },
  framePosition1: {
    overflow: "hidden",
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frameLayout: {
    width: 375,
    left: 0,
    overflow: "hidden",
  },
  acceptedTypo: {
    fontFamily: FontFamily.robotoFlex,
    fontWeight: "500",
  },
  addressTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.robotoFlexRegular,
  },
  framePosition: {
    paddingHorizontal: Padding.p_xl,
    width: 375,
    left: 0,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  frameBorder: {
    height: 54,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  weHaveAdded: {
    top: 1103,
    left: 26,
    fontSize: FontSize.caption1Medium_size,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoFlexRegular,
    width: 335,
  },
  icons: {
    marginLeft: -13.5,
    top: 1056,
    width: 37,
    height: 37,
    left: "50%",
    position: "absolute",
  },
  bookingDetailConfirmChild: {
    top: 1146,
    left: 21,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorGold,
    height: 52,
  },
  continue: {
    height: "1.37%",
    marginLeft: -28.5,
    top: "83.9%",
    fontFamily: FontFamily.robotoMedium,
    width: 66,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.headlineRegular_size,
    left: "50%",
    color: Color.colorBlack,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowPrevSmall: {
    width: 24,
    height: 24,
  },
  bookingDetail: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    width: 153,
    height: 26,
    color: Color.colorGray_300,
    fontFamily: FontFamily.robotoFlex,
    textAlign: "left",
  },
  frame1: {
    top: 54,
    left: 20,
    width: 195,
    position: "absolute",
  },
  frame: {
    height: "7.14%",
    top: "0%",
    right: "0%",
    bottom: "92.86%",
    left: "0%",
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
  bookingStatus: {
    textAlign: "left",
    fontSize: FontSize.headlineRegular_size,
    color: Color.colorBlack,
  },
  accepted: {
    fontSize: FontSize.size_smi_9,
    color: Color.colorGold,
    textAlign: "center",
  },
  frame4: {
    borderRadius: Border.br_6xl_9,
    borderColor: Color.colorGold,
    borderWidth: 0.9,
    width: 89,
    justifyContent: "center",
    borderStyle: "solid",
    height: 26,
    alignItems: "center",
    overflow: "hidden",
  },
  frame3: {
    paddingBottom: 0,
    alignSelf: "stretch",
  },
  weHaveReviewed: {
    fontSize: FontSize.size_mini_7,
    lineHeight: 19,
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.colorBlack,
  },
  frame2: {
    top: 108,
    paddingLeft: Padding.p_2xl,
    paddingTop: Padding.p_sm,
    paddingRight: Padding.p_xl,
    paddingBottom: Padding.p_sm,
    gap: Gap.gap_6xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  address: {
    textAlign: "left",
    fontSize: FontSize.headlineRegular_size,
    color: Color.colorBlack,
  },
  frame5: {
    top: 228,
    height: 74,
    paddingTop: Padding.p_mini,
    gap: Gap.gap_15xs,
  },
  frame6: {
    top: 454,
    height: 70,
    paddingVertical: Padding.p_smi,
    gap: Gap.gap_16xs,
  },
  frameChild: {
    marginLeft: -181.5,
    top: 0,
    borderBottomWidth: 1,
    width: 363,
    left: "50%",
  },
  markEdwards: {
    fontSize: 17,
    width: 120,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  frame8: {
    top: 16,
    left: 67,
    height: 22,
    width: 120,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  installer: {
    width: "14.32%",
    top: "35.19%",
    left: "83.47%",
    fontSize: 13,
    textAlign: "right",
    color: Color.colorGray_300,
    position: "absolute",
  },
  frameIcon: {
    top: 4,
    left: 14,
    width: 38,
    height: 46,
  },
  frame7: {
    top: 915,
    borderWidth: 1,
    width: 375,
    left: 0,
    overflow: "hidden",
  },
  bookingDetailConfirm: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default BookingDetailConfirm1;
