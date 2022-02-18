import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentViewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentViewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    borderWidth: 2,
    backgroundColor: "red",
    borderColor: "red",
    height: 100,
    width: 100,
  },
  viewTwoStyle: {
    borderWidth: 2,
    backgroundColor: "green",
    borderColor: "green",
    height: 100,
    width: 100,
    top: 100,
  },
  viewThreeStyle: {
    borderWidth: 2,
    backgroundColor: "purple",
    borderColor: "purple",
    height: 100,
    width: 100,
  },
});

export default BoxScreen;
