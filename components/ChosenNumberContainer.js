import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";

const ChosenNumberContainer = (props) => {
  return (
    <View style={styles.summaryChosenNumberBox}>
      <Text style={styles.summaryChosenNumber}>{props.children}</Text>
    </View>
  );
};

export default ChosenNumberContainer;

const styles = StyleSheet.create({
  summaryChosenNumberBox: {
    alignContent: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 10,
    borderColor: Colors.accent,
    borderWidth: 2,
    marginVertical: 15
  },
  summaryChosenNumber: {
    color: Colors.accent,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});
