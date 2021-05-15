import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import {Input, SmallButton, Loading} from '../components';
import {useLogin} from '../hooks/useLogin';
import {logIn_items} from '../styles/login_styles';

function LogIn({navigation, route}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(0);
  const [passwordValid, setPasswordValid] = useState(0);
  const refPassword = useRef();

  const {loading, error, response, login} = useLogin();

  function checkEmailText(mailText) {
    setEmail(mailText);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(mailText.toLowerCase())) {
      setEmailValid(1);
    } else {
      setEmailValid(0);
    }
  }

  function checkPasswordText(passwordText) {
    setPassword(passwordText);
    if (passwordText.length > 5) {
      setPasswordValid(1);
    } else {
      setPasswordValid(0);
    }
  }

  function loginHandler() {
    let conditions = emailValid && passwordValid;
    if (conditions) {
      login(email, password);
    } else {
      Alert.alert('EMPTY FIELD(S)!', "Don't leave empty fields");
    }
  }

  if (loading) {
    return (
      <Loading message="Loggin in..."/>
    );
  }

  if (response && global.loggedIn) {
    console.log(`checking response. GOT: ${response}`);
    console.log(response);
    navigation.navigate('MainScreen');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={logIn_items.container}>
          {route.params?.messageToPrint && !error ? (
            <Text style={logIn_items.message}>
              {route.params?.messageToPrint}
            </Text>
          ) : null}
          {error ? (<Text style={logIn_items.message}>⚠️ {error.code}</Text>): null}
          <Input
            buttonTitle="Email Adress"
            placeholder="user@example.com"
            onText={userName => checkEmailText(userName)}
            currentColor={emailValid || !email.length ? '#0000' : 'red'}
            fieldType="email"
            nextFocus={refPassword}
          />
          <Input
            secureTextEntry={true}
            buttonTitle="Password"
            placeholder="SeCuR3&L3n9thY"
            onText={passwordText => checkPasswordText(passwordText)}
            currentColor={passwordValid || !password.length ? '#0000' : 'red'}
            reference={refPassword}
          />
          <SmallButton buttonTitle="Log in" onSelect={loginHandler} />
          <SmallButton
            buttonTitle="Or sign up"
            isText="true"
            onSelect={() => navigation.navigate('SignUp')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export {LogIn};
