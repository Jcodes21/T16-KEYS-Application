import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  Border,
  FontFamily,
  FontSize,
  Padding,
  Gap,
} from "../GlobalStyles";

const Frame9 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={[styles.frame1, styles.frame1Position]}>
        <View style={styles.frame2}>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("Categories")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/group-20334.png")}
            />
          </Pressable>
          <View style={[styles.handymanParent, styles.frameChildLayout]}>
            <Text style={styles.handyman}>Handyman</Text>
            <Image
              style={[styles.frameItem, styles.frameItemPosition]}
              resizeMode="cover"
              source={require("../assets/group-20335.png")}
            />
          </View>
          <Image
            style={styles.frameInner}
            resizeMode="cover"
            source={require("../assets/group-22.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.frame3, styles.frame3FlexBox]}
        onPress={() => navigation.navigate("AddAddress")}
      >
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons1.png")}
        />
        <Text style={[styles.addAddress, styles.addTypo]}>Add Address</Text>
      </Pressable>
      <Pressable
        style={[styles.frame4, styles.frameLayout]}
        onPress={() => navigation.navigate("AddDetails")}
      >
        <Pressable
          style={[styles.rectanglePressable, styles.frameLayout]}
          onPress={() => navigation.navigate("AddDetails")}
        />
        <Text style={[styles.addDetails, styles.addTypo]}>Add details</Text>
        <Image
          style={[styles.icons1, styles.iconsPosition]}
          resizeMode="cover"
          source={require("../assets/icons2.png")}
        />
      </Pressable>
      <View style={[styles.frame5, styles.frameLayout]}>
        <Pressable
          style={[styles.rectanglePressable, styles.frameLayout]}
          onPress={() => navigation.navigate("AddPhotos")}
        />
        <Text style={[styles.addDetails, styles.addTypo]}>Add photos</Text>
        <Image
          style={[styles.icons2, styles.iconsPosition]}
          resizeMode="cover"
          source={require("../assets/icons3.png")}
        />
      </View>
      <Pressable
        style={[styles.confirmDetailsWrapper, styles.frame3FlexBox]}
        onPress={() => navigation.navigate("BookingDetailPending")}
      >
        <Text style={styles.confirmDetails}>Confirm Details</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frame1Position: {
    left: 0,
    top: 0,
  },
  frameChildLayout: {
    height: 85,
    width: 85,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  frameItemPosition: {
    top: 0,
    position: "absolute",
  },
  frame3FlexBox: {
    alignItems: "center",
    width: 335,
    position: "absolute",
  },
  addTypo: {
    fontFamily: FontFamily.robotoFlexRegular,
    fontSize: FontSize.caption1Medium_size,
    textAlign: "left",
    color: Color.colorBlack,
  },
  frameLayout: {
    height: 53,
    left: 0,
  },
  iconsPosition: {
    top: 15,
    height: 24,
    width: 24,
    position: "absolute",
  },
  frameChild: {
    top: 2,
    left: 93,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 117,
    top: 26,
    width: 37,
    height: 37,
    position: "absolute",
  },
  handyman: {
    top: 64,
    left: 17,
    fontSize: FontSize.size_2xs_9,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  frameItem: {
    left: 57,
    width: 31,
    height: 31,
  },
  handymanParent: {
    left: 0,
    top: 0,
  },
  frameInner: {
    height: "41.58%",
    width: "20.86%",
    top: "22.91%",
    right: "66.24%",
    bottom: "35.51%",
    left: "12.9%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  frame2: {
    width: 178,
    height: 87,
    overflow: "hidden",
  },
  frame1: {
    justifyContent: "center",
    overflow: "hidden",
    width: 335,
    position: "absolute",
  },
  icons: {
    height: 24,
    width: 24,
  },
  addAddress: {
    textAlign: "left",
  },
  frame3: {
    top: 109,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_mini,
    gap: Gap.gap_11xs,
    height: 53,
    left: 0,
    backgroundColor: Color.colorLavender,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  rectanglePressable: {
    backgroundColor: Color.colorLavender,
    borderRadius: Border.br_8xs,
    height: 53,
    top: 0,
    position: "absolute",
    width: 335,
  },
  addDetails: {
    marginLeft: -121.2,
    top: 19,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  icons1: {
    left: 12,
  },
  frame4: {
    top: 169,
    overflow: "hidden",
    width: 335,
    position: "absolute",
  },
  icons2: {
    left: 11,
  },
  frame5: {
    top: 236,
    overflow: "hidden",
    width: 335,
    position: "absolute",
  },
  confirmDetails: {
    fontSize: FontSize.size_mini_1,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  confirmDetailsWrapper: {
    top: 320,
    left: -1,
    borderRadius: Border.br_7xs_3,
    backgroundColor: Color.colorKhaki,
    height: 46,
    justifyContent: "center",
  },
  frame: {
    top: 150,
    left: 20,
    height: 380,
    overflow: "hidden",
    width: 335,
    position: "absolute",
  },
});

export default Frame9;
