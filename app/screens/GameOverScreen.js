import React from 'react'
import { Image,StyleSheet, Text, View,Button } from 'react-native'

const GameOverScreen = ({totalScore,resetGameHandler}) => {
   
  const getScoreText = () => {
    let scoreText;

    if(totalScore <=8){
       scoreText = "you are awesome and innocent";
    }else if(totalScore <=12){
      scoreText = "Pretty Likable";
    }else if(totalScore <=16){
      scoreText="you are Strange!";
    }
    else{
      scoreText = "you are so bad";
    }
    return scoreText;
  }

    return (
        <View style={styles.gameOverScreen}>
          <Image
           source={{
             uri:"https://pbs.twimg.com/profile_images/1283323991055306752/bTOBYRov.jpg"
           }}
           resizeMode="contain"
           style={styles.gameOverImage}
          />
          <View style={styles.resultContainer}>
           <Text style={styles.scoreText}>{getScoreText()}</Text>
           <Button title="Reset" onPress={resetGameHandler} />
          </View>
      </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    gameOverScreen: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 150,
      },
      gameOverImage: {
        width:"100%",
        height: 200,
      },
      resultContainer:{
        height:120,
        justifyContent:"space-around",
        backgroundColor:"#fff",
        padding:20,
        borderRadius:10,
        shadowColor:"#000",
        shadowOffset:{
          width:0,
          height:6,
        },
        shadowOpacity:0.26,
        shadowRadius:8,
        elevation:8,
      },
      scoreText: {
        fontSize:18,
        fontWeight:"700",
      },

})
