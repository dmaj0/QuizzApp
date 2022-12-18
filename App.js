import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, Button, View } from 'react-native';
import { create } from 'react-test-renderer';
import WelcomeScreen from './Screens/welcomeScreen';
import ResultsTable from './Screens/ResultScreen';
import QuestionScreen from './Screens/QuizzScreen';
import FinalResultScreen from './Screens/FinalResultScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const AppStack = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={WelcomeScreen} />
        <Drawer.Screen name="Results" component={ResultsTable} />

        <Drawer.Screen name="Quizz Ganeral Knowledge" component={QuestionScreen} />
        <Drawer.Screen name="Quizz Math Knowledge" component={QuestionScreen} />
        <Drawer.Screen name="Quizz Science Knowledge" component={QuestionScreen} />
      </Drawer.Navigator> 
    </NavigationContainer>
  );
};
const MyStack = () => {
  return(
    <AppStack.Navigator initialRouteName="Drawer">
      <AppStack.Screen name="Drawer" component={App}/>
      <AppStack.Screen name="FinalScreen" component={FinalResultScreen} />
    </AppStack.Navigator>
  );
}

export default App;