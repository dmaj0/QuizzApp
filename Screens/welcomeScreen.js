import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ToastAndroid,
  Button,
  TouchableOpacity
} from 'react-native';
import babelConfig from '../babel.config';



const WelcomeScreen = ({navigation}) => {
  
  
  return (
    <View style={styles.container}>
     <View style={styles.content}>
        <Text style={styles.title}>Choose a Quizz</Text>
        <View style={styles.sectionOfTest}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quizz Ganeral Knowledge')}>
            <Text style={styles.buttonText}>General Knowledge</Text>
            </TouchableOpacity>
            <Text style={styles.copyright}>
                This is a quizz about general Knowledge, not specific category.
            </Text>
        </View>
        <View style={styles.sectionOfTest}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quizz Math Knowledge')}>
            <Text style={styles.buttonText}>Math</Text>
            </TouchableOpacity>
            <Text style={styles.copyright}>
                This is a quizz about your Math Knowledge.
            </Text>
        </View>
        <View style={styles.sectionOfTest}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quizz Science Knowledge')}>
            <Text style={styles.buttonText}>Science</Text>
            </TouchableOpacity>
            <Text style={styles.copyright}>
                This is a quizz about your sience Knowledge
            </Text>
        </View>
        
        
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Results')}>
            <Text style={styles.buttonText}>Go to Results</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginTop: 20,
    color: '#666',
  },
  sectionOfTest:{
    height: "20%",
    marginTop: "3%",
    marginBottom: "2%",
    padding: '1%',
    borderColor: 'black',
    backgroundColor: '#ddd',
    width: '100%',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  footer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  copyright: {
    color: '#333',
  },
});
export default WelcomeScreen;