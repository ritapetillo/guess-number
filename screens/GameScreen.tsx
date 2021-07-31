import React from 'react'
import { useState,useRef,useEffect } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'
import Card from '../components/Card'

const generateRandomNumber = (min:number ,max:number,exclude:number) : number=>{
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNumber = Math.floor((Math.random() * (max-min)) + min)
    if(randomNumber === exclude){
        return generateRandomNumber(min,max,exclude)
    } else{
        return randomNumber
    }
}
interface Props{
    userChoice:number,
    startGame:(n:number | undefined)=>void

}
const GameScreen :React.FC<Props> = ({userChoice,startGame}) => {
const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1,100,userChoice))
const currentLow = useRef(1)
const currentHight = useRef(100)
useEffect(()=>{
if(userChoice === currentGuess){
    Alert.alert('You Win')
    startGame(undefined)
}
},[currentGuess])

const nextMove = (type:string) =>{
    if(type==='lower' && userChoice < currentGuess || type==='greater' && userChoice > currentGuess)
    {
        Alert.alert('Wrong')
        return;
    } 
    console.log(currentGuess)
    if(type==='lower'){
        currentLow.current = currentGuess 

    } else if(type==='greater'){
        currentHight.current = currentGuess 
    }
   setCurrentGuess(generateRandomNumber(currentLow.current,currentHight.current,currentGuess))

}
    return (
        <View style={styles.screen}>
            <Text style={styles.numberText}>{currentGuess}</Text>
            <Card>
                <View>
                    <Text>This number is __ than my number</Text>
               <Button title="LOWER" onPress={()=>{nextMove('lower')}}/>
               <Button title="GREATER" onPress={()=>{nextMove('greater')}} />
               <Button title="RESET" onPress={()=>{startGame(undefined)}} /> 
               <div>Try again</div>

               </View>
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
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
})
