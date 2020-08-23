import React, { useState } from "react";
import { View, Alert, AsyncStorage } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { Card, Button, Input  } from "react-native-elements";
import { onSignIn } from "../../services/auth";
import api from "../../services/auth/api";


const signIn = async () => {
  try {
    const response = await api.post('/auth/login', {
      email: 'francisco@gmail.com',
      password: '102030@me',
    });

    console.log(response);

    //const { token, user } = response.data;



    //this.setState({ loggedInUser: user });

    Alert.alert('Logado com sucesso!');
  } catch (err) {
    console.log(err);
    //this.setState({ errorMessage: err.data.error });
  }
}

export default ({ navigation  = useNavigation() }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <Input placeholder="Digite seu e-mail" />
      <Input  secureTextEntry placeholder="Digite sua senha" />
      <Button
        buttonStyle={{ marginTop: 20 }}
        title="Entrar"
        onPress={() => {
          signIn()
          //onSignIn().then(() => navigation.navigate("Home"));
        }}
      />
    </Card>
  </View>
);