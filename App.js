import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Notification from './Screens/Notification';
import Permission from './Screens/Permission';
import Profile from './Screens/Profile';
import Report from './Screens/Report';
import Signture from './Screens/Signture';
import Welcomepage from './Screens/Welcomepage';
import Navigator from './Routes/WelcomeStack'
import Map from './Screens/Map'
import MenuBar from './Screens/MenuBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignUp, Home } from "./Screens"
import axios from 'axios';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcomepage} />
        <Stack.Screen name="MenuBar" component={MenuBar} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Permission" component={Permission} />
        <Stack.Screen name="Signture" component={Signture} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


