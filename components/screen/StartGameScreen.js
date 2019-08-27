import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../Card";
import Input from "../Input";
import Colors from "../../constants/colors";
import ChosenNumberContainer from "../ChosenNumberContainer";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const inputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputhandler = () => {
    const choosenNumber = parseInt(enteredValue);
    if (
      Number.isNaN(choosenNumber) ||
      choosenNumber <= 0 ||
      choosenNumber > 99
    ) {
      Alert.alert(
        "Nieprawidłowa wartość",
        "Liczba musi się zawierać między 1 a 99",
        [{ text: "OK", style: "destructive" }],
        (onPress = { resetInputHandler })
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(choosenNumber);
    setEnteredValue("");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.startGameScreen}>
        <Text style={styles.title}>Rozpocznij nowa grę!</Text>
        <Card styles={styles.inputContainer}>
          <Text style={styles.text}>Podaj liczbę</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={inputHandler}
          />
          <View style={styles.buttonBox}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Colors.accent}
                onPress={resetInputHandler}
              />
            </View>

            <View style={styles.button}>
              <Button
                title="Jest OK"
                color={Colors.primary}
                onPress={confirmInputhandler}
              />
            </View>
          </View>
        </Card>
        {confirmed && (
          <Card styles={styles.summaryContainer}>
            <Text>Wybrany numer:</Text>
            <ChosenNumberContainer>{selectedNumber}</ChosenNumberContainer>
            <Button
              title="Ropocznij grę"
              color={Colors.primary}
              onPress={() => props.onStartGame(selectedNumber)}
            />
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  startGameScreen: {
    width: "100%",
    height: "100%",
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  text: {
    textAlign: "center"
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  inputContainer: {
    width: 300,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15
  },
  button: {
    width: "49%"
  },
  summaryContainer: {
    width: 200,
    paddingHorizontal: 15,
    alignItems: "center",
    marginTop: 20
  }
});
