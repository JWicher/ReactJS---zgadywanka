import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../../constants/colors";

export default GameOverScreen = (props) => {
  return (
    <View style={styles.gameOverScreen}>
      <Text style={styles.gameOverText}>Koniec Gry!</Text>
      <Text style={styles.gameOverText}>Ilość prób: {props.guessRounds}</Text>
      <View style={styles.button}>
        <Button
          title="jeszcze raz"
          color={Colors.primary}
          onPress={props.onRepeatGame}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameOverScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginTop: 15
  }
});
