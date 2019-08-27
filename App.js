import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./components/screen/StartGameScreen";
import GameScreen from "./components/screen/GameScreen";
import GameOverScreen from "./components/screen/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  const repeatGameHandler = () => {
    setUserNumber();
    setGuessRounds(0);
  };

  let currentScreen = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    currentScreen = (
      <GameScreen choosenNumber={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    currentScreen = (
      <GameOverScreen
        guessRounds={guessRounds}
        onRepeatGame={repeatGameHandler}
      />
    );
  }

  return (
    <View style={styles.app}>
      <Header title="Zgadywanka" />
      {currentScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    height: "100%"
  }
});
