import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  Border,
  FontFamily,
  FontSize,
  Gap,
  Padding,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame3 = ({ group, group1, group427321932, more, groupIconWidth }) => {
  const groupIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", groupIconWidth),
    };
  }, [groupIconWidth]);

  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={[styles.frame1, styles.frameLayout]}>
        <Image style={styles.groupIcon} resizeMode="cover" source={group} />
        <Text style={[styles.cleaning, styles.moreTypo]}>Cleaning</Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <Image style={styles.groupIcon1} resizeMode="cover" source={group1} />
        <Text style={[styles.repairing, styles.moreTypo]}>Repairing</Text>
      </View>
      <Pressable
        style={[styles.frame3, styles.frameLayout1]}
        onPress={() => navigation.navigate("PlaceBooking")}
      >
        <View style={[styles.frame4, styles.frameFlexBox]}>
          <Image
            style={[styles.frameChild, groupIconStyle]}
            resizeMode="cover"
            source={group427321932}
          />
          <Text style={[styles.more, styles.moreTypo]}>{more}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    paddingBottom: 16,
    justifyContent: "flex-end",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs_1,
    height: 96,
  },
  moreTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoFlex,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
  },
  frameFlexBox: {
    gap: Gap.gap_10xs,
    alignItems: "center",
    overflow: "hidden",
  },
  frameLayout1: {
    width: 97,
    overflow: "hidden",
  },
  groupIcon: {
    width: 45,
    height: 42,
  },
  cleaning: {
    width: 47,
  },
  frame1: {
    paddingLeft: 25,
    paddingTop: Padding.p_base,
    paddingRight: 25,
    gap: Gap.gap_13xs,
    width: 97,
    overflow: "hidden",
  },
  groupIcon1: {
    width: 37,
    height: 35,
  },
  repairing: {
    width: 50,
  },
  frame2: {
    width: 96,
    paddingLeft: 23,
    paddingTop: 16,
    paddingRight: 23,
    paddingBottom: 16,
    justifyContent: "flex-end",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs_1,
    height: 96,
  },
  frameChild: {
    width: 36,
    height: 36,
  },
  more: {
    width: 59,
  },
  frame4: {
    height: 60,
    width: 59,
  },
  frame3: {
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_base,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs_1,
    width: 97,
    alignItems: "center",
    flexDirection: "row",
    height: 96,
  },
  frame: {
    width: 324,
    gap: Gap.gap_5xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    height: 96,
  },
});

export default Frame3;
