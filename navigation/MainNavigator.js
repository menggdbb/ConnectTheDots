import React, {Component} from 'react';
import { View, Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ClinicalAssessScreen from '../screens/ClinicalAssessScreen';
import ClinicalAssessResultScreen from '../screens/ClinicalAssessResultScreen';
import LoginScreen from '../screens/LoginScreen';
import SelfAssessScreen from '../screens/SelfAssessScreen';
import SelfAssessResultScreen from '../screens/SelfAssessResultScreen';
import TutorialScreen from '../screens/TutorialScreen';


const Project = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: LoginScreen,
  },
   ClinicalAssess: {
    screen: ClinicalAssessScreen,
  },
  ClinicalAssessResult: {
    screen: ClinicalAssessResultScreen,
  },
  SelfAssess: {
    screen: SelfAssessScreen,
  },
  SelfAssessResult: {
    screen: SelfAssessResultScreen,
  }, 
  Tutorial: {
    screen: TutorialScreen,
  },
});

export default createAppContainer(Project);