import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";


import Header from "./app/components/Header";
import QUESTIONS from "./app/data/questions"
import  QuestionsScreen from "./app/screens/QuestionsScreen"
import GameOverScreen from "./app/screens/GameOverScreen"

export default function App() {
  const [questions, setQuestions] = useState(QUESTIONS);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const answerHandler = (score) => {
    setTotalScore((prevScore) => prevScore + score);

    setCurrentQuestionIndex((prevQuesIndex) => prevQuesIndex + 1);
  };

  const resetGameHandler = () => {
    setCurrentQuestionIndex(0);
    setTotalScore(0);
  };

  return (
    <View style={styles.container}>
      <Header />
      {currentQuestionIndex < 3 ? (
        <QuestionsScreen
        currentQuestion={questions[currentQuestionIndex]}
        onQuesAnswered={answerHandler}
        />
      ) : (
      <GameOverScreen 
       totalScore={totalScore}
       resetGameHandler={resetGameHandler}
      />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
 
 
});
