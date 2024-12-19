import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Frame4 from "../components/Frame4";
import Frame6 from "../components/Frame6";
import Frame5 from "../components/Frame5";
import Frame7 from "../components/Frame7";
import { Gap, Border, Color } from "../GlobalStyles";

const BookingDetailConfirm = () => {
  return (
    <ScrollView style={styles.bookingDetailConfirm}>
      <Frame4 />
      <Frame6 />
      <View style={styles.frame}>
        <Frame5 />
        <Frame7 />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: 375,
    overflow: "hidden",
    gap: Gap.gap_12xs,
    alignItems: "center",
  },
  bookingDetailConfirm: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    width: "100%",
    paddingBottom: 195,
    gap: Gap.gap_13xs,
    maxWidth: "100%",
    alignItems: "center",
  },
});

export default BookingDetailConfirm;
