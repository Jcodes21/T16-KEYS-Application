import * as React from "react";
import { Text, StyleSheet, Pressable, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Gap } from "../GlobalStyles";

const Frame21 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <Text style={styles.paymentAmount}>Payment Amount</Text>
          <Pressable
            style={styles.icon}
            onPress={() => navigation.navigate("Payment2ndStep")}
          >
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/icon5.png")}
            />
          </Pressable>
        </View>
        <Text style={styles.clearedPayments}>Cleared payments</Text>
      </View>
      <View style={styles.frame3}>
        <View style={styles.frame4}>
          <View style={styles.frame5}>
            <Image
              style={styles.cibccVisaIcon}
              resizeMode="cover"
              source={require("../assets/cibccvisa.png")}
            />
            <Text style={styles.paymentAmount}>Amount paid</Text>
          </View>
          <View style={styles.frame6}>
            <Text style={styles.text}>£190</Text>
            <Pressable
              style={styles.icon}
              onPress={() => navigation.navigate("Payment3rdStep")}
            >
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/icon6.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.frame7}>
          <Text style={styles.paymentsSummary}> Payments summary</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentAmount: {
    position: "relative",
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  icon: {
    position: "relative",
    width: 13,
    height: 7,
  },
  frame2: {
    backgroundColor: Color.colorWhite,
    width: 375,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_lgi,
  },
  clearedPayments: {
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "left",
    opacity: 0.5,
    height: 19,
    marginRight: 225,
  },
  frame1: {
    alignSelf: "stretch",
    height: 106,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: Gap.gap_3xl,
  },
  cibccVisaIcon: {
    position: "relative",
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  frame5: {
    width: 147,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    position: "relative",
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "600",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  frame6: {
    width: 120,
    height: 19,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_12xl,
  },
  frame4: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_lgi_8,
    paddingTop: Padding.p_smi,
    paddingBottom: Padding.p_xs,
  },
  paymentsSummary: {
    position: "relative",
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "left",
    opacity: 0.5,
  },
  frame7: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  frame3: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: Gap.gap_14xl,
  },
  frame: {
    position: "absolute",
    top: 404,
    left: 0,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_13xs,
  },
});

export default Frame21;
