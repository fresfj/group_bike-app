import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../views/landing'
import Login from '../views/login'
import Home from '../views/home'
import Friends from '../views/friends'
import Groups from '../views/groups'

const { Navigator , Screen } = createStackNavigator();

function AppStack() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name='Landing' component={Landing}/>
        <Screen name='Login' component={Login}/>
        <Screen name='Home' component={Home}/>
        <Screen name='Friends' component={Friends}/>
        <Screen name='Groups' component={Groups}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack