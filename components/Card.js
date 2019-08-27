import React from "react";
import { View, StyleSheet } from "react-native";
const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.styles }}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    maxWidth: "80%",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    borderRadius: 5,
    elevation: 6
  }
});
