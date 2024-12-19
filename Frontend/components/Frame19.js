import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ArrowPrevSmall from "./ArrowPrevSmall";
import ItemsMiddle from "./ItemsMiddle";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame19 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <ArrowPrevSmall
        arrowPrevSmallPosition="absolute"
        arrowPrevSmallTop={53}
        arrowPrevSmallLeft={20}
      />
      <ItemsMiddle isAvatar={false} type="main" />
      <Pressable
        style={[styles.frame1, styles.frameLayout]}
        onPress={() => navigation.navigate("PlaceBooking")}
      >
        <Pressable
          style={[styles.frameChild, styles.frameLayout]}
          onPress={() => navigation.navigate("PlaceBooking")}
        />
        <Text style={styles.save}>Save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 33,
    width: 72,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_9xs_5,
    backgroundColor: Color.colorGold,
  },
  save: {
    top: "24.46%",
    left: "29.58%",
    fontSize: FontSize.size_sm_9,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  frame1: {
    top: 49,
    left: 278,
    overflow: "hidden",
  },
  frame: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 100,
    overflow: "hidden",
  },
});

export default Frame19;
