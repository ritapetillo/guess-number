import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from './screens/GameScreen'
export default function App() {
  const [selectedNumber,setSelectedNumber] = useState<undefined |number>()

  const startGame = (n : number) =>{
    setSelectedNumber(n)
  }
  return (
    <View style={styles.screen}>
      <Header title={"Guess a number"} />
     {selectedNumber ? <GameScreen startGame={startGame} userChoice={selectedNumber}/> : <StartGameScreen startGame={startGame} /> }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
