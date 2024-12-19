import * as React from "react";
import { Text, StyleSheet, Pressable, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  Color,
  FontFamily,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

const Frame7 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frame, styles.frameFlexBox1]}>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={[styles.frame2, styles.frameFlexBox1]}>
          <Text style={[styles.attachments, styles.attachmentsTypo]}>
            Attachments
          </Text>
          <Pressable
            style={styles.image33}
            onPress={() => navigation.navigate("AddPhotos")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/image-331.png")}
            />
          </Pressable>
        </View>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame.png")}
        />
      </View>
      <View style={[styles.frame3, styles.frameFlexBox1]}>
        <View style={[styles.frame4, styles.frameFlexBox]}>
          <Text
            style={styles.weHaveAdded}
          >{`We have added  items and prices in your booking. 
Kindly confirm by tapping \`Confirm Details\` button.`}</Text>
        </View>
        <Pressable
          style={[styles.frame4, styles.frameFlexBox]}
          onPress={() => navigation.navigate("BookingDetailConfirm1")}
        >
          <Pressable
            style={[styles.confirmDetailsWrapper, styles.frameFlexBox]}
            onPress={() => navigation.navigate("BookingDetailConfirm1")}
          >
            <Text style={[styles.confirmDetails, styles.attachmentsTypo]}>
              Confirm Details
            </Text>
          </Pressable>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  attachmentsTypo: {
    textAlign: "left",
    fontSize: FontSize.headlineRegular_size,
    color: Color.colorBlack,
  },
  attachments: {
    opacity: 0.5,
    fontFamily: FontFamily.robotoFlexRegular,
    textAlign: "left",
    fontSize: FontSize.headlineRegular_size,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  image33: {
    width: 45,
    height: 36,
  },
  frame2: {
    backgroundColor: Color.colorWhite,
    height: 102,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    gap: Gap.gap_11xs,
    overflow: "hidden",
  },
  frameIcon: {
    width: 42,
    height: 37,
    overflow: "hidden",
  },
  frame1: {
    gap: Gap.gap_15xl,
    alignItems: "center",
    overflow: "hidden",
  },
  weHaveAdded: {
    fontSize: FontSize.caption1Medium_size,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoFlexRegular,
    alignSelf: "stretch",
  },
  frame4: {
    alignItems: "flex-end",
    overflow: "hidden",
  },
  confirmDetails: {
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    width: 111,
    height: 19,
    textAlign: "left",
    fontSize: FontSize.headlineRegular_size,
  },
  confirmDetailsWrapper: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorGold,
    height: 52,
    alignItems: "center",
  },
  frame3: {
    gap: Gap.gap_9xs,
    alignItems: "center",
    overflow: "hidden",
  },
  frame: {
    gap: Gap.gap_10xs,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Frame7;
