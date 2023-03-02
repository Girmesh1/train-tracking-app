import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import Welcomepage from '../Screens/Welcomepage';
import SignUp from '../Screens/SignUp';
import Home from '../Screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



 const Stack = createNativeStackNavigator();


 function WelcomeStack() {
    return (
      <Stack.Navigator>
        <Stack.pages name="Welcomepage" component={Welcomepage} />
        <Stack.pages name="SignUp" component={SignUp} />
        {/* <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
       */}
       </Stack.Navigator>
    );
  }

 export default createAppContainer(WelcomeStack);