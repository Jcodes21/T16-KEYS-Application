import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Gap } from "../GlobalStyles";

const Frame23 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <Text style={styles.details}>Details</Text>
      <View style={styles.frame1}>
        <Text
          style={styles.iRecentlyPurchased}
        >{`I recently purchased a dishwasher, and I’m looking 
for someone experienced to handle the installation. 
The kitchen space is ready for it, but I want everything 
to be installed properly, including secure connections 
to the plumbing and electrical systems. `}</Text>
        <Pressable
          style={styles.showMore}
          onPress={() => navigation.navigate("BookingDetailDescription")}
        >
          <Text style={styles.showMore1}>Show more</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    fontSize: FontSize.headlineRegular_size,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    textAlign: "left",
    opacity: 0.5,
    height: 19,
    marginRight: 286,
  },
  iRecentlyPurchased: {
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
    height: 16,
    marginLeft: 278,
  },
  frame1: {
    width: 359,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 99,
    marginLeft: 12,
  },
  frame: {
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 154,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_2xs,
    gap: Gap.gap_10xs,
  },
});

export default Frame23;
