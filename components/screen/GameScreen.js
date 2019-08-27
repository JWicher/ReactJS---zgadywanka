import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import ChosenNumberContainer from "../ChosenNumberContainer";
import Card from "../Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else return randomNumber;
};

export default GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.shoosenNumber)
  );

  return (
    <View style={styles.gameScreen}>
      <Text>Przeciwnik wybrał</Text>
      <ChosenNumberContainer>{currentGuess}</ChosenNumberContainer>
      <Card styles={styles.buttonContainer}>
        <Button title="lower" />
        <Button title="bigger" />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 200,
    maxWidth: "80%"
  }
});
