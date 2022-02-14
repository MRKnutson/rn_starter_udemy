import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_one":
      return { ...state, counter: state.counter + action.payload };
    case "minus_one":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = (props) => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({ type: "add_one", payload: 1 });
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({ type: "minus_one", payload: -1 });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
