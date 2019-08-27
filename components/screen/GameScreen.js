import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
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
  const { choosenNumber, onGameOver } = props;
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, choosenNumber)
  );

  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === choosenNumber) {
      onGameOver(rounds);
    }
  }, [currentGuess, choosenNumber, onGameOver]);

  const nextGueassHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < choosenNumber) ||
      (direction === "greater" && currentGuess > choosenNumber)
    ) {
      Alert.alert("Nie kłam", "Wiesz, że to źle informujesz...", [
        { text: "OK, przepraszam", style: "cancel" }
      ]);
      return;
    } else if (direction == "lower") {
      currentHigh.current = currentGuess;
    } else if (direction == "greater") {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((currentRounds) => currentRounds + 1);
  };
  return (
    <View style={styles.gameScreen}>
      <Text>Przeciwnik wybrał</Text>
      <ChosenNumberContainer>{currentGuess}</ChosenNumberContainer>
      <Card styles={styles.buttonContainer}>
        <Button title="lower" onPress={() => nextGueassHandler("lower")} />
        <Button
          title="bigger"
          onPress={nextGueassHandler.bind(this, "greater")}
        />
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
