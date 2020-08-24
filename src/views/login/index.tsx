import React, { useState } from "react";
import { SafeAreaView, View, Alert, AsyncStorage, TextInput, Text, ActivityIndicator } from "react-native";
import { Card, Button, Input } from "react-native-elements";
import { onSignIn } from "../../services/auth";
import api from "../../services/auth/api";

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

const signIn = async () => {
  try {
    const response = await api.post('/auth/login', {
      email: 'francisco@gmail.com',
      password: '102030@me',
    });
    
    //this.setState({ loggedInUser: user });

    Alert.alert('Logado com sucesso!');
  } catch (err) {
    console.log(err);
    //this.setState({ errorMessage: err.data.error });
  }
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .email()
    .required(),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(2, 'Seems a bit short...')
    .max(10, 'We prefer insecure system, try a shorter password.'),
});

export default  () => (
  <SafeAreaView style={{ paddingVertical: 20, marginTop: 90  }}>
    <Formik
      initialValues={{ email: '', password:''}}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values));
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      }}
      validationSchema={validationSchema}
    >
      {formikProps => (
        <React.Fragment>
          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Text style={{ marginBottom: 3 }}>Email</Text>
            <TextInput
              placeholder="johndoe@example.com"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                marginBottom: 3,
              }}
              onChangeText={formikProps.handleChange('email')}
              onBlur={formikProps.handleBlur('email')}
              autoFocus
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.email && formikProps.errors.email}
            </Text>
          </View>

          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <Text style={{ marginBottom: 3 }}>Password</Text>
            <TextInput
              placeholder="password"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                marginBottom: 3,
              }}
              onChangeText={formikProps.handleChange('password')}
              onBlur={formikProps.handleBlur('password')}
              secureTextEntry
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.password && formikProps.errors.password}
            </Text>
          </View>

          {formikProps.isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <Button title="Submit" onPress={formikProps.handleSubmit} />
          )}
        </React.Fragment>
      )}
    </Formik>
  </SafeAreaView>
);