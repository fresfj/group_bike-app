import React from 'react'
import {View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'


interface InputPageProps {
  title: string
  name: string,
  email: string,
}

const InputPage: React.FC<InputPageProps> = ({ title }) => {
  return (
    
    <View style={styles.container}>
      <Text>{ title }</Text>
      <TextInput style={styles.input}/>
    </View>
   
  )}


export default InputPage;