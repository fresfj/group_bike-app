import React from "react";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { Card, Button, Input  } from "react-native-elements";
import { onSignIn } from "../../services/auth";

export default ({ navigation  = useNavigation() }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <Input placeholder="Digite seu e-mail" />
      <Input  secureTextEntry placeholder="Digite sua senha" />
      <Button
        buttonStyle={{ marginTop: 20 }}
        title="Entrar"
        onPress={() => {
          onSignIn().then(() => navigation.navigate("Home"));
        }}
      />
    </Card>
  </View>
);