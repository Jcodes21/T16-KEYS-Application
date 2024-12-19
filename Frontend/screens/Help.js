import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import Frame24 from "../components/Frame24";
import Frame25 from "../components/Frame25";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Help = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.help}>
      <View style={styles.orderDetailPending}>
        <View style={styles.frameParent}>
          <View style={styles.frame}>
            <Image
              style={styles.arrowPrevSmallIcon}
              resizeMode="cover"
              source={require("../assets/arrowprevsmall.png")}
            />
            <Text style={styles.bookingDetail}>Booking Detail</Text>
          </View>
          <View style={styles.frame1}>
            <Text style={styles.weHaveReviewed}>
              We have reviewed your booking. Our team will contact you soon for
              quotation.
            </Text>
            <View style={styles.frame2}>
              <Text style={styles.bookingStatus}>Booking Status</Text>
              <View style={styles.frame3}>
                <Text style={styles.pending}>Pending</Text>
              </View>
            </View>
          </View>
          <View style={styles.frame4}>
            <Text style={styles.address}>Address:</Text>
            <Text style={styles.ndStreetLondon}>
              125, 2nd street, London, 1988
            </Text>
          </View>
          <Frame24 />
          <View style={styles.frame5}>
            <Text style={styles.address}>Booking Date</Text>
            <Text style={styles.ndStreetLondon}>20 March 12:00 PM</Text>
          </View>
          <View style={styles.frame6}>
            <View style={styles.frame7}>
              <Text style={styles.details}>Details</Text>
            </View>
            <View style={styles.frame8}>
              <View style={styles.frame9}>
                <Text
                  style={styles.thereAreNo}
                >{`There are no limits in the world of Helppmi. You can
be both a customer and a helper. For more you can
 press show more.`}</Text>
              </View>
              <Text style={styles.showMore}>Show more</Text>
            </View>
          </View>
          <Frame25 />
        </View>
        <Image
          style={styles.image32Icon}
          resizeMode="cover"
          source={require("../assets/image-33.png")}
        />
      </View>
      <View style={styles.helpChild} />
      <View style={styles.afterConfirmationWeAreGoiParent}>
        <Text style={styles.afterConfirmationWe}>
          After confirmation, we are going to assign workers for your order.
        </Text>
        <Text style={styles.doYouNeed}>Do you need any Help?</Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-427321927.png")}
        />
        <Pressable
          style={styles.frame10}
          onPress={() => navigation.navigate("BookingDetailAccepted")}
        >
          <Text style={styles.contact}>Contact</Text>
        </Pressable>
        <Pressable
          style={styles.x}
          onPress={() => navigation.navigate("BookingDetailPending")}
        >
          <Text style={styles.x1}>X</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  arrowPrevSmallIcon: {
    position: "relative",
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
  },
  frame: {
    alignSelf: "stretch",
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    height: 100,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_36xl,
    gap: 38,
  },
  weHaveReviewed: {
    position: "absolute",
    top: 55,
    left: 20,
    fontSize: FontSize.size_mini_7,
    lineHeight: 19,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 298,
    opacity: 0.5,
  },
  bookingStatus: {
    position: "absolute",
    top: 3,
    left: 0,
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "left",
  },
  pending: {
    position: "absolute",
    top: "20.08%",
    left: "23.26%",
    fontSize: FontSize.size_smi_9,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorGold,
    textAlign: "center",
  },
  frame3: {
    position: "absolute",
    height: "100%",
    width: "26.65%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "73.35%",
    borderRadius: Border.br_6xl_9,
    borderStyle: "solid",
    borderColor: Color.colorGold,
    borderWidth: 0.9,
    overflow: "hidden",
  },
  frame2: {
    position: "absolute",
    top: 18,
    left: 21,
    width: 334,
    height: 26,
    overflow: "hidden",
  },
  frame1: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 112,
    overflow: "hidden",
  },
  address: {
    position: "relative",
    fontSize: FontSize.headlineRegular_size,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    textAlign: "left",
    opacity: 0.5,
  },
  ndStreetLondon: {
    position: "relative",
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "left",
  },
  frame4: {
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
  frame5: {
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
    width: 33,
    marginTop: 14,
  },
  frame7: {
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 134,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
  },
  thereAreNo: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    textAlign: "center",
  },
  frame9: {
    width: 341,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  showMore: {
    fontSize: FontSize.caption1Medium_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorMediumslateblue,
    textAlign: "left",
    width: 113,
    marginTop: 97,
  },
  frame8: {
    width: 341,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  frame6: {
    width: 375,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  frameParent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_13xs,
  },
  image32Icon: {
    position: "absolute",
    top: 56,
    left: 331,
    width: 24,
    height: 24,
  },
  orderDetailPending: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite_100,
    width: 375,
    height: 902,
  },
  helpChild: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorBlack,
    width: 375,
    height: 884,
    opacity: 0.5,
  },
  afterConfirmationWe: {
    position: "absolute",
    marginLeft: -129.5,
    top: "51.93%",
    left: "50%",
    fontSize: FontSize.caption1Medium_size,
    fontFamily: FontFamily.robotoFlexRegular,
    color: "#6f7485",
    textAlign: "center",
    width: 258,
  },
  doYouNeed: {
    position: "absolute",
    marginLeft: -103.5,
    top: "38.82%",
    left: "50%",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorGray_300,
    textAlign: "center",
  },
  frameChild: {
    position: "absolute",
    marginLeft: -45.5,
    top: 41,
    left: "50%",
    width: 91,
    height: 91,
  },
  contact: {
    position: "relative",
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  frame10: {
    position: "absolute",
    height: "13.37%",
    width: "64.18%",
    top: "78.15%",
    right: "17.77%",
    bottom: "8.48%",
    left: "18.05%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorGold,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
  },
  x1: {
    marginLeft: -152.5,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  x: {
    position: "absolute",
    left: "50%",
    top: "4.63%",
  },
  afterConfirmationWeAreGoiParent: {
    position: "absolute",
    marginTop: 31,
    marginLeft: -174.5,
    top: "50%",
    left: "50%",
    borderRadius: 18,
    backgroundColor: Color.colorWhite,
    width: 349,
    height: 389,
  },
  help: {
    position: "relative",
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default Help;
