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

const Frame26 = () => {
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
            style={styles.payNowContainer}
            onPress={() => navigation.navigate("ConfirmationPage")}
          >
            <Text style={styles.payNow}>PAY NOW</Text>
          </Pressable>
        </View>
        <View style={styles.frame11}>
          <Text style={styles.remainingPayments}> Cleared payments</Text>
          <View style={styles.frame12}>
            <View style={styles.frame13}>
              <Pressable
                style={styles.frameChild}
                onPress={() => navigation.navigate("Payment3rdStep")}
              />
              <Image
                style={styles.cibccVisaIcon}
                resizeMode="cover"
                source={require("../assets/cibccvisa1.png")}
              />
            </View>
            <View style={styles.frame14}>
              <View style={styles.frame15}>
                <Text style={styles.paymentAmount}>Amount paid</Text>
                <Text style={styles.text2}>£190</Text>
              </View>
              <Pressable
                style={styles.icon}
                onPress={() => navigation.navigate("Payment3rdStep")}
              >
                <Image
                  style={styles.icon1}
                  resizeMode="cover"
                  source={require("../assets/icon7.png")}
                />
              </Pressable>
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
    position: "absolute",
    marginLeft: -167,
    top: "0%",
    left: "50%",
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
    position: "absolute",
    top: 66,
    left: 0,
    width: 336,
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
    height: 152,
    overflow: "hidden",
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
  payNowContainer: {
    alignSelf: "stretch",
    borderRadius: Border.br_7xs_3,
    backgroundColor: Color.colorGold,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_115xl,
    paddingVertical: Padding.p_smi,
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
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 57,
  },
  cibccVisaIcon: {
    position: "absolute",
    top: 13,
    left: 20,
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  frame13: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 57,
    overflow: "hidden",
  },
  frame15: {
    width: 196,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame14: {
    position: "absolute",
    top: 19,
    left: 75,
    width: 280,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame12: {
    alignSelf: "stretch",
    position: "relative",
    height: 57,
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
    gap: Gap.gap_5xl,
  },
  frame: {
    width: 375,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_11xs,
  },
});

export default Frame26;
