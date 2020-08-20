import React from 'react'
import { View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler' 
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import logoImg from '../../assets/images/logo.png';

function Landing(){
  const { navigate } = useNavigation()

  function handleNavigateToLoguin(){
    navigate('LoguinTabs')
  }

  function handleNavigateToRegister() {
   navigate('LoguinTabs')
  }

  return (
    <View style={styles.container}>
      <Image source={logoImg} resizeMode="contain" style={styles.logoImg}/>
      
      <Text style={styles.title}>Encontre pessoas para andar de bike</Text>

      <RectButton onPress={handleNavigateToRegister} style={[styles.button, styles.buttonPrimary]}>
        <Text style={[styles.buttonText, styles.buttonTextPrimary]}>Cadastrar</Text>
      </RectButton>

      <Text onPress={handleNavigateToRegister} style={styles.buttonTextSecondary}>
        <Text style={[styles.buttonTextSecondary]}>Já possuo cadastro</Text>
      </Text>

      <Text style={styles.textMiddle}>Ou</Text>

      <Text style={styles.textMiddleBold}>ENTRAR COM</Text>
    </View> 
)}

export default Landing;