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
import ArrowPrevSmall from "../components/ArrowPrevSmall";
import Frame14 from "../components/Frame14";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const BookingDetailPending = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.bookingDetailPending}>
      <View style={styles.frame}>
        <Pressable
          style={styles.image31}
          onPress={() => navigation.navigate("Help")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/image-33.png")}
          />
        </Pressable>
        <View style={styles.frame1}>
          <ArrowPrevSmall />
          <Text style={styles.bookingDetail}>Booking Detail</Text>
        </View>
      </View>
      <View style={styles.frame2}>
        <View style={styles.frame3}>
          <Text style={styles.bookingStatus}>Booking Status</Text>
          <View style={styles.frame4}>
            <Text style={styles.pending}>Pending</Text>
          </View>
        </View>
        <Text style={styles.weHaveReceived}>
          We have received your booking and will get back to you as soon as the
          order is reviewed.
        </Text>
      </View>
      <View style={styles.frame5}>
        <Text style={styles.address}>Address:</Text>
        <Text style={styles.bookingStatus}>125, 2nd street, London, 1988</Text>
      </View>
      <Frame14 />
      <View style={styles.frame6}>
        <Text style={styles.address}>Booking Date</Text>
        <Text style={styles.bookingStatus}>20 December 12:00 PM</Text>
      </View>
      <View style={styles.frame7}>
        <Text style={styles.details}>Details</Text>
        <View style={styles.frame8}>
          <Text
            style={styles.iRecentlyPurchased}
          >{`I recently purchased a dishwasher, and I’m looking 
for someone experienced to handle the installation. 
The kitchen space is ready for it, but I want everything 
to be installed properly, including secure connections 
to the plumbing and electrical systems. `}</Text>
          <View style={styles.frame9}>
            <Pressable
              style={styles.showMore}
              onPress={() => navigation.navigate("BookingDetailDescription")}
            >
              <Text style={styles.showMore1}>Show more</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.frame10}>
        <Text style={styles.address}>Attachments</Text>
        <Pressable
          style={styles.image35}
          onPress={() => navigation.navigate("AddPhotos")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/image-35.png")}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  image31: {
    position: "absolute",
    left: 328,
    top: 56,
    width: 24,
    height: 24,
  },
  bookingDetail: {
    position: "relative",
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorGray_300,
    textAlign: "left",
    width: 149,
    height: 26,
  },
  frame1: {
    position: "absolute",
    top: 55,
    left: 20,
    width: 198,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame: {
    alignSelf: "stretch",
    position: "relative",
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    height: 100,
    overflow: "hidden",
  },
  bookingStatus: {
    position: "relative",
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "left",
  },
  pending: {
    position: "relative",
    fontSize: FontSize.size_smi_9,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorGold,
    textAlign: "center",
  },
  frame4: {
    borderRadius: Border.br_6xl_9,
    borderStyle: "solid",
    borderColor: Color.colorGold,
    borderWidth: 0.9,
    width: 89,
    height: 26,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 19,
    paddingVertical: 0,
  },
  frame3: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weHaveReceived: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_mini_7,
    lineHeight: 19,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    textAlign: "left",
    opacity: 0.5,
  },
  frame2: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: Padding.p_2xl,
    paddingTop: Padding.p_lg,
    paddingRight: Padding.p_xl,
    paddingBottom: Padding.p_lg,
    gap: Gap.gap_10xs,
  },
  address: {
    position: "relative",
    fontSize: FontSize.headlineRegular_size,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    textAlign: "left",
    opacity: 0.5,
  },
  frame5: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    height: 74,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_mini,
    gap: Gap.gap_15xs,
  },
  frame6: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    height: 70,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_smi,
    gap: Gap.gap_16xs,
  },
  details: {
    fontSize: FontSize.headlineRegular_size,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    textAlign: "left",
    opacity: 0.5,
    height: 19,
    marginLeft: 6,
  },
  iRecentlyPurchased: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    textAlign: "left",
  },
  showMore1: {
    fontSize: FontSize.caption1Medium_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorMediumslateblue,
    textAlign: "left",
  },
  showMore: {
    position: "relative",
  },
  frame9: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame8: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame7: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: Padding.p_sm,
    paddingTop: Padding.p_sm,
    paddingRight: Padding.p_11xs,
    paddingBottom: Padding.p_2xs,
    gap: Gap.gap_10xs,
  },
  image35: {
    position: "relative",
    width: 75,
    height: 56,
  },
  frame10: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    height: 132,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    gap: Gap.gap_4xs,
  },
  bookingDetailPending: {
    position: "relative",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: Padding.p_57xl,
    gap: Gap.gap_13xs,
    maxWidth: "100%",
  },
});

export default BookingDetailPending;
