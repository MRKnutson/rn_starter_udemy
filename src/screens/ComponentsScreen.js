import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = <Text>Hello to you!</Text>;
  const name = "Michael";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subheaderTextStyle}>my name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subheaderTextStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
