import * as React from "react";
import { StyleSheet, View } from "react-native";
import Form from "./Form";
import Select from "./Select";

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.formParent}>
        <Form isError={false} />
        <Select isError={false} />
        <Form isError={false} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  card: {
    width: 371,
    height: 373,
    alignItems: "center",
  },
});

export default Card;
