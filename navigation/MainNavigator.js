import React, {Component} from 'react';
import { View, Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import ClinicalAssessScreenA from '../screens/ClinicalAssessScreenA';
import ClinicalAssessScreenB from '../screens/ClinicalAssessScreenB';
import ClinicalAssessResultScreenA from '../screens/ClinicalAssessResultScreenA';
import ClinicalAssessResultScreenB from '../screens/ClinicalAssessResultScreenB';
import ClinicalAssessFinalResultScreen from '../screens/ClinicalAssessFinalResultScreen';
import LoginScreen from '../screens/LoginScreen';
import SelfAssessScreenA from '../screens/SelfAssessScreenA';
import SelfAssessScreenB from '../screens/SelfAssessScreenB';
import SelfAssessResultScreenA from '../screens/SelfAssessResultScreenA';
import SelfAssessResultScreenB from '../screens/SelfAssessResultScreenB';
import SelfAssessFinalResultScreen from '../screens/SelfAssessFinalResultScreen';
import TutorialScreen from '../screens/TutorialScreen';
import TutorialScreenB from '../screens/TutorialScreenB';
import StaffScreen  from '../screens/StaffScreen';
import RecordsScreen from '../screens/RecordsScreen';
import LoadingScreen from '../screens/LoadingScreen';


const Project = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Staff: {
    screen: StaffScreen,
  },
  Records: {
    screen: RecordsScreen,
  },
  ClinicalAssessA: {
    screen: ClinicalAssessScreenA,
  },
  ClinicalAssessB: {
    screen: ClinicalAssessScreenB,
  },
  ClinicalAssessResultA: {
    screen: ClinicalAssessResultScreenA,
  },
  ClinicalAssessResultB: {
    screen: ClinicalAssessResultScreenB,
  },
  ClinicalAssessFinalResult: {
    screen: ClinicalAssessFinalResultScreen
  },
  SelfAssessA: {
    screen: SelfAssessScreenA,
  },
  SelfAssessB: {
    screen: SelfAssessScreenB,
  },
  SelfAssessResultA: {
    screen: SelfAssessResultScreenA,
  }, 
  SelfAssessResultB: {
    screen: SelfAssessResultScreenB,
  }, 
  SelfAssessFinalResult: {
    screen: SelfAssessFinalResultScreen
  },
  Tutorial: {
    screen: TutorialScreen,
  },
  TutorialB: {
    screen: TutorialScreenB,
  },
  Loading: {
    screen: LoadingScreen,
  }
});

export default createAppContainer(Project);