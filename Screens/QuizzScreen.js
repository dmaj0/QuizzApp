import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated, Modal, StatusBar, TextInput} from 'react-native';   
import { black, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import data from '../Src/QuizData';
import FinalResultScreen from './FinalResultScreen';
const COLORS = {
  primary: "#252c4a",
  secondary: '#1E90FF',
  accent: '#3498db',
  
  success: '#00C851',
  error: '#ff4444',

  black: "#171717",
  white: "#FFFFFF",
  background: "#252C4A"
}
const QuestionScreen = ({ navigation }) => {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [CurrentOptionSelected, setCurrentOptionSelected] = useState(null)
    const [CorrectOption, setCorrectOption] = useState(null)
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false)
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })
    const [nickname, onChangeNickname] = React.useState(null);


    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption == correct_option){
            setScore(score+1)
        }
        next()
    };
    const next = () =>{
        if(currentQuestionIndex == allQuestions.length-1){
            setShowScoreModal(true)
            
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
          toValue: currentQuestionIndex+1,
          duration: 1000,
          useNativeDriver: false
      }).start();
    };
    const restartQuiz = () => {
      setShowScoreModal(false);

      setCurrentQuestionIndex(0);
      setScore(0);

      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
      Animated.timing(progress, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false
      }).start();
  }
   
    return (
        <View style={styles.container}>
           <View style={styles.progressBar}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    color: '#333'
                },{
                    width: progressAnim
                }]}>
                </Animated.View>

            </View>
            <Text style={styles.QuestionCounter}>{currentQuestionIndex+1}/{allQuestions.length}</Text>
            <Text style={styles.title}>{allQuestions[currentQuestionIndex]?.question}</Text>
            {allQuestions[currentQuestionIndex]?.options.map(option =>
            (
                <View style ={styles.Answer}>
                <TouchableOpacity style={styles.button} onPress={()=>validateAnswer(option)} key={option}>
                        <Text style={styles.buttonText}>{option}</Text>
                </TouchableOpacity>
            </View>
            ))}
            <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                   <View style={stylesResults.container}>
                       <View style={stylesResults.second}>
                          <Text style={stylesResults.resultText}>
                                Enter Your Nickname
                            </Text>
                            <TextInput
                                  style={stylesResults.input}
                                  onChangeText={onChangeNickname}
                                  value={nickname}
                                  placeholder="Your Nickname"
                            />
                           <Text style={stylesResults.resultText}>
                              Your result
                            </Text>

                           <View style={stylesResults.resultContainer}>
                               <Text style={{fontSize: 30,color: score> (allQuestions.length/2) ? COLORS.success : COLORS.error}}>
                                      {score}
                                </Text>
                                <Text style={stylesResults.allquestionsStyle}>/ { allQuestions.length }</Text>
                           </View>
                           {/* Retry Quiz button */}
                           <TouchableOpacity
                              onPress={restartQuiz}
                              style={stylesResults.restartQuizzStyle}>
                               <Text style={styles.buttonText}>Save & Try Again</Text>
                           </TouchableOpacity>
                           <TouchableOpacity
                              onPress={restartQuiz}
                              style={stylesResults.restartQuizzStyle}>
                               <Text style={styles.buttonText}>Go To Menu</Text>
                           </TouchableOpacity>
                           

                      </View>

                  </View>
              </Modal>    
        </View>
      );
    };
    const stylesResults = {
      container:{
        flex: 1,
        backgroundColor: '',
        alignItems: 'center',
        justifyContent: 'center',
      },
      second:{
        backgroundColor: COLORS.white,
        width: '90%',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center'
      },
      resultText:{
        fontSize: 30,
        fontWeight: 'bold'
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      resultContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 20,
      },
      allquestionsStyle:{
        fontSize: 20,
         color: COLORS.black
      },
      restartQuizzStyle:{
        backgroundColor: COLORS.black,
        padding: 20,
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: '2%'
     }


    }
    const styles = {
      progressBar:{
        width: '100%',
        height: 20,
        borderRadius: 20,
        backgroundColor: '#00000020',
      },
      container:{
        flex:1,
        backgroundColor: '#fff',
      },
      QuestionCounter:{
        fontSize:16,
        fontWeight: 'bold',
        color: '#333'
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
      },
      Answer:{
        height: "15%",
        marginTop: "10%",
        marginBottom: "2%",
        padding: '1%',
        borderColor: 'black',
        backgroundColor: '#ddd',
        width: '100%',
      },
      button: {
        marginTop: 25,
        padding: 10,
        backgroundColor: '#333',
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 16,
        color: '#fff',
      },
    };

export default QuestionScreen;