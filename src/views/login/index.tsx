import React, { Component, useState } from "react";
import {
  AsyncStorage,
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import { 
  Container, 
  Label, 
  Content, 
  Card, 
  Form, 
  Item, 
  Text, 
  Input, 
  Icon,
  Toast
} from 'native-base';
import api from "../../services/auth/api";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigation } from '@react-navigation/native'

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

export default ({navigation = useNavigation()}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const signIn = async ({values}) => {
    try {
      const res = await api.post('/auth/login', {
        email: values.email,
        password: values.password,
      });
  
      if(res.status == 200){
        setErrorMessage("");
        const token = res.data.token;
        await AsyncStorage.setItem('@CodeApi:token', token);
        navigation.navigate('Home');
        // this.props.navigation.navigate(Screens.SignInStack.route)
      }else{
        setErrorMessage(JSON.stringify(res.data.message));
      }
      console.log(res);
    } catch (err) {
      setErrorMessage(JSON.stringify(err.data.message));
    }
  }

  return (
    <Container>
      <Content padder style={{ marginTop: 60 }}>
      <Card>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          signIn({values});
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000);
        }}
        validationSchema={validationSchema}
      >
        {props => (
        <Form>
          <Item floatingLabel style={{ margin: 20 }}>
            <Label>Email</Label>
            <Input
              placeholder="Email@gmail.com"
              style={{
                padding: 10,
                marginBottom: 3,
              }}
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              autoFocus
            />
          </Item>
          {props.errors.email && props.touched.email ? (
            <Text style={{ color: 'red' }}>{props.errors.email}</Text>
          ): null}
          <Item floatingLabel last style={{ margin: 20 }} >
            <Label>Password</Label>
            <Input placeholder="Password"
              style={{
                padding: 10,
                marginBottom: 3,
              }}
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              secureTextEntry
            />
            <Icon active name='swap' />
          </Item> 
          {errorMessage ? (
            <Text style={{ color: 'red' }}>{errorMessage}</Text>
          ): null}     
          {props.errors.password && props.touched.password ? (
            <Text style={{ color: 'red' }}>{props.errors.password}</Text>
          ): null}          
          {props.isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <Button disabled={!props.isValid} onPress={props.handleSubmit} title="Send" />
          )}
          </Form>
          )}
        </Formik>
        </Card>
      </Content>
    </Container>
  );
}