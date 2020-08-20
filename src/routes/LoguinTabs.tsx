import React from 'react'

import LoguinPage from '../components/InputPage'

import { createStackNavigator } from '@react-navigation/stack';

const { Navigator , Screen } = createStackNavigator();

 function LoguinTabs() {
 return   (
    <Navigator>
      <Screen title="Nome" name='Nome' component={LoguinPage}/>
      <Screen name='Email' component={LoguinPage} />
      <Screen name='Number' component={LoguinPage} />
      <Screen name='CodePage' component={LoguinPage} />
      <Screen name='PasswordPage' component={LoguinPage} /> 
    </Navigator>
  ) 
}

export default LoguinPage