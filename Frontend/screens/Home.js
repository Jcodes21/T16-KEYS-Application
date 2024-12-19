import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Frame16 from "../components/Frame16";
import Frame18 from "../components/Frame18";
import Frame15 from "../components/Frame15";
import Frame17 from "../components/Frame17";
import { Gap, Border, Color } from "../GlobalStyles";

const Home = () => {
  return (
    <ScrollView style={styles.home}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Frame16 />
        <Frame18 />
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Frame15 />
        <Frame17 />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  frame: {
    top: 0,
    left: 0,
    width: 375,
    gap: 513,
  },
  frame1: {
    top: 249,
    left: 16,
    width: 343,
    height: 364,
    justifyContent: "center",
    gap: Gap.gap_7xs,
  },
  home: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite_100,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default Home;
