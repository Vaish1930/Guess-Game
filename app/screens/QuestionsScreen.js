import React from 'react'
import {Button, StyleSheet, Text, View } from 'react-native'

const QuestionsScreen = ({currentQuestion,onQuesAnswered}) => {
    return (
       
            <View style={styles.quizContainer}>
             <Text style={styles.questionText}>{currentQuestion.questionText}</Text>
             <View style={styles.action}>
            {currentQuestion.answers.map(({ text, score }) => (
              <View key={text} style={styles.answerButton}>
                <Button title={text} onPress={() => onQuesAnswered(score)} />
              </View>
            ))}
          </View>
        </View>
    );
};

export default QuestionsScreen;

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    alignItems:"center",
  },
  questionText: {
    fontWeight: "800",
    fontSize: 18,
    marginVertical: 10,
  },
  action: {
    width: "100%",
  },
  answerButton: {
    marginVertical: 10,
  },
})
