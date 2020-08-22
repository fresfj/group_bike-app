import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../views/Landing';
import Login from '../views/login';
import Home from '../views/home';

const { Navigator , Screen } = createStackNavigator();

function AppStack() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name='Landing' component={Landing}/>
        <Screen name='Login' component={Login}/>
        <Screen name='Home' component={Home}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack