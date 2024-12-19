import React, { useMemo } from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame = ({
  frameAlignSelf,
  framePosition,
  frameTop,
  frameLeft,
  frameWidth,
}) => {
  const frameStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", frameAlignSelf),
      ...getStyleValue("position", framePosition),
      ...getStyleValue("top", frameTop),
      ...getStyleValue("left", frameLeft),
      ...getStyleValue("width", frameWidth),
    };
  }, [frameAlignSelf, framePosition, frameTop, frameLeft, frameWidth]);

  const navigation = useNavigation();

  return (
    <View style={[styles.frame, frameStyle]}>
      <View style={[styles.frameChild, styles.framePosition]} />
      <View style={[styles.frameItem, styles.framePosition]} />
      <Image
        style={[styles.frameInner, styles.frameInnerLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2881.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.frameInnerLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2881.png")}
      />
      <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
      <Pressable
        style={styles.showMore}
        onPress={() => navigation.navigate("BookingDetailDescription")}
      >
        <Text style={styles.showMore1}>Show more</Text>
      </Pressable>
      <Text
        style={[styles.iRecentlyPurchased, styles.detailsTypo]}
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
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    width: 375,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  frameInnerLayout: {
    height: 56,
    width: 56,
    borderRadius: Border.br_9xs_3,
    top: 194,
    position: "absolute",
  },
  detailsTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoFlexRegular,
    textAlign: "left",
    position: "absolute",
  },
  frameChild: {
    top: 0,
    height: 145,
  },
  frameItem: {
    top: 142,
    height: 132,
  },
  frameInner: {
    left: 90,
  },
  rectangleIcon: {
    left: 299,
  },
  details: {
    top: 14,
    left: 20,
    fontSize: FontSize.headlineRegular_size,
    opacity: 0.5,
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
    left: 291,
    top: 242,
    position: "absolute",
  },
  iRecentlyPurchased: {
    top: 41,
    left: 12,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
  },
  frame: {
    alignSelf: "stretch",
    height: 274,
    overflow: "hidden",
  },
});

export default Frame;
