import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Frame9 from "../components/Frame9";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const PlaceBooking = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.placeBooking}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Pressable
            style={styles.arrowPrevSmall}
            onPress={() => navigation.navigate("Categories")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrowprevsmall.png")}
            />
          </Pressable>
          <Text style={styles.placeBooking1}>Place booking</Text>
        </View>
        <Text style={styles.category}>Category</Text>
      </View>
      <Frame9 />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  arrowPrevSmall: {
    position: "relative",
    width: 24,
    height: 24,
  },
  placeBooking1: {
    position: "relative",
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  frame1: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 100,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 52,
    gap: Gap.gap_3xs,
  },
  category: {
    fontSize: FontSize.caption1Medium_size,
    fontWeight: "600",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "left",
    height: 16,
    marginRight: 276,
  },
  frame: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 137,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 21,
  },
  placeBooking: {
    position: "relative",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default PlaceBooking;
