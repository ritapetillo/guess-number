import React, { useState } from "react";
import { useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
 Alert
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import colors from "../constants/colors";

interface Props{
  startGame:(n:number)=>void
}

const StartGameScreen : React.FC<Props> = ({startGame}) => {
  const [number, setNumber] = useState("");
  const [confirmed,setConfirmed] = useState(false)
  const [selectedNumber,setSelectedNumber] = useState<undefined | number>()

  const handleChange = (number: string) => {
    setNumber(number.replace(/[^0-9]/g, ""))
  setConfirmed(false)

  };

  const handleReset = () =>{
    setNumber('')
    setConfirmed(false)
  }

  const handleConfirmed = () =>{
    if(parseInt(number) < 0 || parseInt(number) > 99){
      Alert.alert("Number not allowed", "you must selexted a number between 1 and 99")
      return
    }
    setSelectedNumber(parseInt(number))
    setConfirmed(true)
    setNumber('')
  }

  const confirmedText = useMemo(()=>{
    if(confirmed){
      return(
      <Card style={styles.cardNumber}>
        <>
      <Text>You've selected</Text>
      <Text style={styles.numberText}>{selectedNumber}</Text>
      <Button title="Start Game" onPress={()=>{selectedNumber !== undefined && startGame(selectedNumber)}}/>
      </>
      </Card>
      )
    }

  },[confirmed,selectedNumber])

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <>
            <Text>Select a number</Text>
            <Input
              styles={styles.input}
              keyboardType="number-pad"
              onChangeText={handleChange}
              value={number}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Reset"
                  color={colors.accent}
                  onPress={()=>handleReset()}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Confirm"
                  onPress={handleConfirmed}
                  color={colors.primary}
                />
              </View>
            </View>
          </>
        </Card>
        {confirmedText}

      </View>
      
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "600",
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
    shadowColor: "rgb(0,0,0)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 15,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 60,
  },
  cardNumber:{
marginTop:40,
alignContent:'center',
justifyContent:'center',

  },
  numberText:{
    alignSelf:'center',
    textAlign:'center',
    fontSize:20,
    marginVertical:20,
    fontWeight:'700',
    color:colors.primary,
    padding:10,
    borderWidth:2,
    borderColor:colors.accent,
    width: '50%',
    borderRadius:5,
    

  },
  button: {
    width: "50%",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});
