import React from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { useNavigation } from '@react-navigation/native'
import { onSignOut } from "../../services/auth";


export default ({ navigation  = useNavigation() }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="Pablo Richelli">
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>JP</Text>
      </View>
      <Button
        title="Sair"
        onPress={() => onSignOut().then(() => navigation.navigate("Landing"))}
      />
    </Card>
  </View>
);