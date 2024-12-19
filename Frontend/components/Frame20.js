import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Frame20 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <Pressable
            style={styles.icon}
            onPress={() => navigation.navigate("BookingDetailConfirm1")}
          >
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/icon2.png")}
            />
          </Pressable>
          <Text style={styles.payments}>Payments</Text>
        </View>
        <Text style={styles.activePayment}>Active payment</Text>
      </View>
      <View style={styles.frame3}>
        <View style={styles.frame4}>
          <View style={styles.frame5}>
            <View style={styles.frame6}>
              <Text style={styles.amount}>Amount</Text>
              <Text style={styles.dueDate}>Due Date</Text>
            </View>
            <View style={styles.frame7}>
              <View style={styles.frame8}>
                <Text style={styles.text}>£190</Text>
                <Text style={styles.text1}>10/11/2023</Text>
              </View>
              <View style={styles.frame9}>
                <Text style={styles.servicePayment}>Service payment</Text>
                <Pressable
                  style={styles.payNowWrapper}
                  onPress={() => navigation.navigate("ConfirmationPage")}
                >
                  <Text style={styles.payNow}>PAY NOW</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frame4}>
          <Text style={styles.remainingPayments}> Remaining payments</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon1: {
    width: "100%",
    height: "100%",
  },
  icon: {
    position: "relative",
    width: 7,
    height: 13,
  },
  payments: {
    position: "relative",
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  frame2: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 100,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_8xl_4,
    paddingTop: Padding.p_36xl,
    paddingBottom: Padding.p_lgi,
    gap: Gap.gap_xl,
  },
  activePayment: {
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "left",
    opacity: 0.5,
    height: 19,
    marginRight: 244,
  },
  frame1: {
    width: 375,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: Gap.gap_2xs,
  },
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
  frame6: {
    position: "absolute",
    top: 67,
    left: 23,
    width: 335,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  frame8: {
    position: "absolute",
    top: 66,
    left: 0,
    width: 336,
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
  frame9: {
    position: "absolute",
    top: 0,
    left: 1,
    width: 335,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_13xl,
  },
  frame7: {
    position: "absolute",
    top: 29,
    left: 22,
    width: 336,
    height: 152,
    overflow: "hidden",
  },
  frame5: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: Color.colorWhite,
    height: 196,
    overflow: "hidden",
  },
  frame4: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  remainingPayments: {
    position: "relative",
    fontSize: FontSize.headlineRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoFlex,
    color: Color.colorBlack,
    textAlign: "left",
    opacity: 0.5,
  },
  frame3: {
    width: 378,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: Gap.gap_6xl,
  },
  frame: {
    position: "absolute",
    top: 0,
    left: -3,
    width: 378,
    height: 394,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: Gap.gap_16xs,
  },
});

export default Frame20;
