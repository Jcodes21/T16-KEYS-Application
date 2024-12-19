import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Close1 from "../components/Close1";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const BookingDetailDescription = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.bookingDetailDescription}
      onPress={() => navigation.navigate("BookingDetailConfirm")}
    >
      <View
        style={[
          styles.bookingDetailDescriptionChild,
          styles.bookingChildLayout,
        ]}
      />
      <View
        style={[styles.bookingDetailDescriptionItem, styles.bookingChildLayout]}
      />
      <View
        style={[
          styles.bookingDetailDescriptionInner,
          styles.bookingChildLayout,
        ]}
      />
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.childPosition1]}>
          <View style={[styles.groupChild, styles.groupBorder]} />
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <Text style={[styles.cleaning, styles.cleaningTypo]}>Cleaning</Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Image
          style={[styles.groupIcon1, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group1.png")}
        />
        <Text style={[styles.repairing, styles.cleaningTypo]}>Repairing</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Image
          style={[styles.groupIcon2, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group2.png")}
        />
        <Text style={[styles.electrician, styles.carpenterTypo]}>
          Electrician
        </Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Image
          style={[styles.groupIcon3, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group3.png")}
        />
        <Text style={styles.carpenterTypo}>Carpenter</Text>
      </View>
      <View
        style={[
          styles.bookingDetailDescriptionChild1,
          styles.bookingChildLayout,
        ]}
      />
      <View
        style={[
          styles.bookingDetailDescriptionChild2,
          styles.bookingChildLayout,
        ]}
      />
      <Text style={[styles.address, styles.detailsFlexBox]}>Address:</Text>
      <Text style={[styles.serviceType, styles.detailsFlexBox]}>
        Service Type
      </Text>
      <Text style={[styles.details, styles.detailsFlexBox]}>Details</Text>
      <Text style={[styles.showMore, styles.showMoreTypo]}>Show more</Text>
      <Text style={[styles.ndStreetLondon, styles.detailsFlexBox]}>
        125, 2nd street, London, 1988
      </Text>
      <Text style={[styles.bookingStatusPending, styles.detailsFlexBox]}>
        Booking Status: Pending
      </Text>
      <Text
        style={[styles.dateTime, styles.detailsFlexBox]}
      >{`Date & Time`}</Text>
      <Text style={[styles.march1200Pm, styles.detailsFlexBox]}>
        20 March 12:00 PM
      </Text>
      <Text
        style={[styles.thereAreNo, styles.showMoreTypo]}
      >{`There are no limits in the world of Helppmi. You can be both a customer and a helper. For more 
you can press show more.`}</Text>
      <View
        style={[styles.bookingDetailDescriptionChild3, styles.childPosition]}
      />
      <Image
        style={[styles.arrowPrevSmallIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/arrowprevsmall.png")}
      />
      <Text style={[styles.pending, styles.detailsFlexBox]}>Pending</Text>
      <Text style={[styles.weHaveReceived, styles.showMoreTypo]}>
        We have received your booking and will get back to you as soon as the
        booking is reviewed.
      </Text>
      <View style={styles.frame}>
        <View style={[styles.frameChild, styles.childPosition]} />
        <Text style={[styles.accepted, styles.cleaningTypo]}>Accepted</Text>
      </View>
      <View
        style={[styles.bookingDetailDescriptionChild4, styles.childPosition1]}
      />
      <View style={[styles.rectangleParent2, styles.groupChild1Layout]}>
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-2891.png")}
        />
        <Close1 />
        <Text
          style={[styles.iRecentlyPurchased, styles.showMoreTypo]}
        >{`I recently purchased a dishwasher, and I’m looking 
for someone experienced to handle the installation. 
The kitchen space is ready for it, but I want everything 
to be installed properly, including secure connections 
to the plumbing and electrical systems. This means 
setting up the water inlet and drain lines carefully to
 prevent any potential leaks, as well as wiring it 
safely to ensure it operates correctly and meets 
safety standards. I’m hoping for someone who has 
done this before and knows the ins and outs of a
 dishwasher installation, including any adjustments
 that might be needed for fit or alignment. 
I’d love to have it done professionally so I can use
 it worry-free in the long run.  
`}</Text>
        <Text style={[styles.details1, styles.detailsFlexBox]}>Details</Text>
      </View>
      <Image
        style={[styles.image33Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-33.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bookingChildLayout: {
    width: 335,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    left: 20,
    position: "absolute",
  },
  groupParentLayout: {
    height: 65,
    width: 66,
    position: "absolute",
  },
  childPosition1: {
    left: 0,
    top: 0,
  },
  groupBorder: {
    borderWidth: 0.5,
    borderColor: Color.colorSilver,
    borderRadius: Border.br_6xs_2,
    borderStyle: "solid",
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  cleaningTypo: {
    textAlign: "center",
    fontWeight: "500",
    position: "absolute",
  },
  groupLayout: {
    width: 65,
    height: 65,
    position: "absolute",
  },
  carpenterTypo: {
    left: 14,
    fontFamily: FontFamily.robotoFlex,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "500",
    fontSize: FontSize.size_5xs_4,
    top: 44,
    position: "absolute",
  },
  detailsFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  showMoreTypo: {
    fontSize: FontSize.caption1Medium_size,
    textAlign: "left",
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupChild1Layout: {
    height: 343,
    width: 353,
    position: "absolute",
  },
  bookingDetailDescriptionChild: {
    top: 228,
    height: 74,
  },
  bookingDetailDescriptionItem: {
    top: 310,
    height: 136,
  },
  bookingDetailDescriptionInner: {
    top: 108,
    height: 112,
  },
  groupChild: {
    height: 65,
    width: 66,
    position: "absolute",
  },
  groupIcon: {
    height: "43.61%",
    width: "46.04%",
    top: "17.1%",
    right: "27.13%",
    bottom: "39.29%",
    left: "26.83%",
  },
  cleaning: {
    left: 17,
    fontFamily: FontFamily.robotoMedium,
    width: 32,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xs_4,
    top: 44,
    textAlign: "center",
  },
  rectangleParent: {
    height: 65,
    width: 66,
    position: "absolute",
  },
  groupView: {
    left: 35,
    top: 361,
  },
  groupItem: {
    borderWidth: 0.5,
    borderColor: Color.colorSilver,
    borderRadius: Border.br_6xs_2,
    borderStyle: "solid",
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  groupIcon1: {
    height: "36.21%",
    width: "38.21%",
    top: "21.26%",
    right: "31.43%",
    bottom: "42.53%",
    left: "30.35%",
  },
  repairing: {
    left: 16,
    width: 34,
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xs_4,
    top: 44,
    textAlign: "center",
  },
  rectangleGroup: {
    left: 113,
    top: 361,
  },
  groupIcon2: {
    height: "37.75%",
    width: "38.26%",
    top: "20.34%",
    right: "31.71%",
    bottom: "41.91%",
    left: "30.03%",
  },
  electrician: {
    width: 37,
  },
  rectangleContainer: {
    left: 190,
    top: 361,
  },
  groupIcon3: {
    height: "33.28%",
    width: "34.76%",
    top: "22.34%",
    right: "32.93%",
    bottom: "44.38%",
    left: "32.32%",
  },
  rectangleParent1: {
    left: 268,
    top: 361,
  },
  bookingDetailDescriptionChild1: {
    top: 454,
    height: 70,
  },
  bookingDetailDescriptionChild2: {
    top: 532,
    height: 134,
  },
  address: {
    top: 243,
    opacity: 0.5,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    fontSize: FontSize.headlineRegular_size,
    textAlign: "left",
    left: 35,
  },
  serviceType: {
    top: 330,
    opacity: 0.5,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    fontSize: FontSize.headlineRegular_size,
    textAlign: "left",
    left: 35,
  },
  details: {
    top: 550,
    opacity: 0.5,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    fontSize: FontSize.headlineRegular_size,
    textAlign: "left",
    left: 35,
  },
  showMore: {
    top: 635,
    left: 263,
    color: Color.colorMediumslateblue,
    fontFamily: FontFamily.robotoFlex,
    fontWeight: "500",
  },
  ndStreetLondon: {
    top: 268,
    fontSize: FontSize.headlineRegular_size,
    textAlign: "left",
    left: 35,
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    fontWeight: "500",
  },
  bookingStatusPending: {
    top: 133,
    fontSize: FontSize.headlineRegular_size,
    textAlign: "left",
    left: 35,
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    fontWeight: "500",
  },
  dateTime: {
    top: 467,
    opacity: 0.5,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    fontSize: FontSize.headlineRegular_size,
    textAlign: "left",
    left: 35,
  },
  march1200Pm: {
    top: 491,
    fontSize: FontSize.headlineRegular_size,
    textAlign: "left",
    left: 35,
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    fontWeight: "500",
  },
  thereAreNo: {
    top: 581,
    width: 312,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    left: 35,
  },
  bookingDetailDescriptionChild3: {
    height: "11.09%",
    bottom: "88.91%",
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
  },
  arrowPrevSmallIcon: {
    top: 56,
    left: 20,
    width: 24,
  },
  pending: {
    marginLeft: -125.5,
    top: "6.1%",
    left: "50%",
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    color: Color.colorGray_300,
    fontFamily: FontFamily.robotoFlex,
  },
  weHaveReceived: {
    top: 162,
    width: 283,
    opacity: 0.5,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    left: 35,
  },
  frameChild: {
    height: "100%",
    bottom: "0%",
    borderRadius: Border.br_6xl_9,
    borderColor: Color.colorGold,
    borderWidth: 0.9,
    borderStyle: "solid",
    right: "0%",
    top: "0%",
  },
  accepted: {
    top: "20.08%",
    left: "18.76%",
    fontSize: FontSize.size_smi_9,
    color: Color.colorGold,
    fontFamily: FontFamily.robotoFlex,
  },
  frame: {
    top: 122,
    left: 254,
    width: 89,
    height: 26,
    overflow: "hidden",
    position: "absolute",
  },
  bookingDetailDescriptionChild4: {
    backgroundColor: Color.colorBlack,
    width: 377,
    height: 884,
    opacity: 0.5,
    position: "absolute",
    top: 0,
    borderRadius: Border.br_11xl,
  },
  groupChild1: {
    borderRadius: 28,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  rectangleIcon: {
    height: 66,
    width: 353,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iRecentlyPurchased: {
    top: 103,
    left: 12,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
  },
  details1: {
    top: 27,
    left: 24,
    fontSize: 17,
    fontWeight: "600",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
  },
  rectangleParent2: {
    top: 348,
    left: 11,
  },
  image33Icon: {
    top: 43,
    left: 334,
  },
  bookingDetailDescription: {
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    height: 902,
    width: "100%",
    borderRadius: Border.br_11xl,
  },
});

export default BookingDetailDescription;
