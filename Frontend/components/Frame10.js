import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Gap,
  Padding,
} from "../GlobalStyles";

const Frame10 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View style={styles.frame3}>
            <Text style={styles.amount}>Amount</Text>
            <Text style={styles.dueDate}>Due Date</Text>
          </View>
          <View style={styles.frame4}>
            <Text style={styles.servicePayment}>Service payment</Text>
            <View style={styles.frame5}>
              <View style={styles.frame6}>
                <Text style={styles.text}>£190</Text>
                <Text style={styles.text1}>10/11/2023</Text>
              </View>
              <Pressable
                style={styles.payNowWrapper}
                onPress={() => navigation.navigate("ConfirmationPage")}
              >
                <Text style={styles.payNow}>PAY NOW</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <Text style={styles.remainingPayments}> Remaining payments</Text>
      </View>
      <View style={styles.frame7}>
        <View style={styles.frame8}>
          <View style={styles.frame6}>
            <Text style={styles.paymentAmount}>Payment Amount</Text>
            <View style={styles.frame10}>
              <Text style={styles.text2}>£190</Text>
              <Pressable
                style={styles.icon}
                onPress={() => navigation.navigate("Payment1stStep")}
              >
                <Image
                  style={styles.icon1}
                  resizeMode="cover"
                  source={require("../assets/icon3.png")}
                />
              </Pressable>
            </View>
          </View>
          <Pressable
            style={styles.payNowWrapper}
            onPress={() => navigation.navigate("ConfirmationPage")}
          >
            <Text style={styles.payNow}>PAY NOW</Text>
          </Pressable>
        </View>
        <View style={styles.frame11}>
          <Text style={styles.remainingPayments}> Cleared payments</Text>
          <View style={styles.frame12}>
            <View style={styles.frame13}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/rectangle-2838.png")}
              />
              <View style={styles.frame14}>
                <Text style={styles.amount}>Expiry Date</Text>
              </View>
            </View>
            <View style={styles.frame15}>
              <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../assets/frame2.png")}
              />
              <View style={styles.frame16}>
                <Text style={styles.paymentAmount}>Amount paid</Text>
              </View>
              <View style={styles.frame17}>
                <View style={styles.frame18}>
                  <View style={styles.frame19}>
                    <Text style={styles.text2}>£190</Text>
                  </View>
                  <Text style={styles.text1}>10/11/2026</Text>
                </View>
                <View style={styles.frame20} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amount: {
    position: "relative",
    fontSize: FontSize.headlineRegular_size,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    textAlign: "left",
    opacity: 0.5,
  },
  dueDate: {
    position: "relative",
    fontSize: FontSize.headlineRegular_size,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    textAlign: "right",
    opacity: 0.5,
  },
  frame3: {
    position: "absolute",
    top: 57,
    left: 20,
    width: 335,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  servicePayment: {
    position: "relative",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  text: {
    position: "relative",
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "left",
  },
  text1: {
    position: "relative",
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "600",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "left",
  },
  frame6: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  payNow: {
    position: "relative",
    fontSize: FontSize.size_mini_1,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  payNowWrapper: {
    alignSelf: "stretch",
    borderRadius: Border.br_7xs_3,
    backgroundColor: Color.colorGold,
    height: 46,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frame5: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_4xs,
  },
  frame4: {
    position: "absolute",
    top: 19,
    left: 19,
    width: 336,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: Padding.p_12xs,
    gap: Gap.gap_9xl,
  },
  frame2: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: Color.colorWhite,
    height: 196,
    overflow: "hidden",
  },
  remainingPayments: {
    alignSelf: "stretch",
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "left",
    opacity: 0.5,
    height: 19,
    marginLeft: 0,
  },
  frame1: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_md,
  },
  paymentAmount: {
    position: "relative",
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  text2: {
    position: "relative",
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "600",
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
  frame10: {
    width: 120,
    height: 19,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_12xl,
  },
  frame8: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_lgi,
    paddingRight: Padding.p_lgi_8,
    paddingBottom: Padding.p_9xl,
    gap: Gap.gap_4xl,
  },
  frameChild: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 106,
  },
  frame14: {
    position: "absolute",
    top: 0,
    left: 18,
    width: 79,
    height: 86,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame13: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 106,
    overflow: "hidden",
  },
  frameIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 32,
    height: 45,
    overflow: "hidden",
  },
  frame16: {
    position: "absolute",
    top: 0,
    left: 56,
    width: 92,
    height: 38,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame19: {
    width: 36,
    height: 38,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame18: {
    width: 82,
    height: 86,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_2xl,
  },
  frame20: {
    position: "relative",
    width: 7,
    height: 38,
    overflow: "hidden",
    marginLeft: -14,
  },
  frame17: {
    position: "absolute",
    top: 0,
    left: 254,
    width: 82,
    height: 86,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  frame15: {
    position: "absolute",
    top: 0,
    left: 20,
    width: 336,
    height: 86,
    overflow: "hidden",
  },
  frame12: {
    alignSelf: "stretch",
    position: "relative",
    height: 106,
    overflow: "hidden",
  },
  frame11: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_13xs,
  },
  frame7: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_4xl,
  },
  frame: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_11xs,
  },
});

export default Frame10;
