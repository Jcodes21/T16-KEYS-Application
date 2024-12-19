import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Frame22 from "../components/Frame22";
import Frame23 from "../components/Frame23";
import {
  Padding,
  Color,
  FontFamily,
  FontSize,
  Border,
  Gap,
} from "../GlobalStyles";

const BookingDetailAccepted = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.bookingDetailAccepted}>
      <View style={[styles.frame, styles.frameSpaceBlock]}>
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
        <View style={[styles.frame1, styles.frameLayout]}>
          <Text style={styles.bookingDetail}>Booking Detail</Text>
          <Pressable
            style={styles.arrowPrevSmall}
            onPress={() => navigation.navigate("Help")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/image-33.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.frame2}>
        <View style={[styles.frame3, styles.frameLayout]}>
          <Text style={styles.bookingStatus}>Booking Status</Text>
          <View style={[styles.frame4, styles.frameLayout]}>
            <Text style={styles.accepted}>Accepted</Text>
          </View>
        </View>
        <Text style={[styles.weHaveReviewed, styles.addressTypo]}>
          We have reviewed your booking. Our team will contact you soon for
          quotation.
        </Text>
      </View>
      <View style={[styles.frame5, styles.frameSpaceBlock]}>
        <Text style={[styles.address, styles.addressTypo]}>Address:</Text>
        <Text style={styles.bookingStatus}>125, 2nd street, London, 1988</Text>
      </View>
      <Frame22 />
      <View style={[styles.frame6, styles.frameSpaceBlock]}>
        <Text style={[styles.address, styles.addressTypo]}>Booking Date</Text>
        <Text style={styles.bookingStatus}>20 December 12:00 PM</Text>
      </View>
      <Frame23 />
      <View style={[styles.frame7, styles.frameSpaceBlock]}>
        <Text style={[styles.address, styles.addressTypo]}>Attachments</Text>
        <Pressable
          style={styles.image34}
          onPress={() => navigation.navigate("AddPhotos")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/image-34.png")}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    overflow: "hidden",
    width: 375,
    backgroundColor: Color.colorWhite,
  },
  frameLayout: {
    height: 26,
    overflow: "hidden",
    alignItems: "center",
  },
  addressTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    textAlign: "left",
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
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.robotoFlex,
  },
  frame1: {
    width: 293,
    gap: 120,
    flexDirection: "row",
  },
  frame: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 100,
    paddingVertical: Padding.p_36xl,
    gap: Gap.gap_3xs,
    flexDirection: "row",
  },
  bookingStatus: {
    color: Color.colorBlack,
    fontWeight: "500",
    fontSize: FontSize.headlineRegular_size,
    textAlign: "left",
    fontFamily: FontFamily.robotoFlex,
  },
  accepted: {
    fontSize: FontSize.size_smi_9,
    color: Color.colorGold,
    textAlign: "center",
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
  },
  frame4: {
    borderRadius: Border.br_6xl_9,
    borderStyle: "solid",
    borderColor: Color.colorGold,
    borderWidth: 0.9,
    width: 89,
    justifyContent: "center",
  },
  frame3: {
    width: 334,
    gap: 136,
    flexDirection: "row",
  },
  weHaveReviewed: {
    fontSize: FontSize.size_mini_7,
    lineHeight: 19,
    width: 298,
  },
  frame2: {
    height: 112,
    paddingLeft: Padding.p_2xl,
    paddingTop: Padding.p_lg,
    paddingRight: Padding.p_xl,
    paddingBottom: Padding.p_lg,
    gap: Gap.gap_10xs,
    overflow: "hidden",
    width: 375,
    backgroundColor: Color.colorWhite,
  },
  address: {
    fontSize: FontSize.headlineRegular_size,
    fontFamily: FontFamily.robotoFlexRegular,
  },
  frame5: {
    height: 74,
    paddingTop: Padding.p_mini,
    gap: Gap.gap_15xs,
  },
  frame6: {
    height: 70,
    paddingVertical: Padding.p_smi,
    gap: Gap.gap_16xs,
  },
  image34: {
    width: 75,
    height: 56,
  },
  frame7: {
    height: 132,
    paddingVertical: Padding.p_base,
    gap: Gap.gap_4xs,
  },
  bookingDetailAccepted: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    paddingBottom: Padding.p_57xl,
    gap: Gap.gap_13xs,
    maxWidth: "100%",
    alignItems: "center",
    width: "100%",
  },
});

export default BookingDetailAccepted;
