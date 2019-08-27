import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    width: "100%",
    paddingBottom: 15,
    paddingTop: 30,
    backgroundColor: Colors.primary,
    alignItems: "center",
    alignContent: "center"
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  }
});
