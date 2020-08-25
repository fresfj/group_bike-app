import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { Container, Header, Label, Content, Form, Item, Input, Text } from 'native-base';
import { Button } from 'react-native-elements'
import { useFormik, Formik } from "formik";
import * as yup from "yup";

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

export default () => {
  return (
    <Container>
     <Header />
      <Content style={{ marginTop: 90 }}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values));
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000);
        }}
        validationSchema={validationSchema}
      >
        {formikProps => (
        <Form>
          <Item>
            <Label>Email</Label>
            <Input
              placeholder="johndoe@example.com"
              style={{
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
          </Item>
          <Item>
            <Label>Password</Label>
            <Input placeholder="Password"
              style={{
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
          </Item>
          {formikProps.isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <Button disabled={!formikProps.isValid} title="Submit"/>
          )}
          </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
}