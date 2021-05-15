import React, {useState, useRef} from 'react';
import {SafeAreaView, Text, View, ScrollView, Alert} from 'react-native';
import {theme} from '../styles/theme';
import {Input, SmallButton, Loading} from '../components';
import {useRegister} from '../hooks/useRegister';
import {logIn_items} from '../styles/login_styles';
function SignUp({navigation}) {
  /*fields validation hooks*/
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [emailValid, setEmailValid] = useState(0);
  const [passwordValid, setPasswordValid] = useState(0);
  const [passwordConfirmValid, setPasswordConfirmValid] = useState(1);
  const [nameValid, setNameValid] = useState(0);
  const [surnameValid, setSurnameValid] = useState(0);

  /*input fields references*/
  const refSurname = useRef();
  const refMail = useRef();
  const refPassword = useRef();
  const refPasswordConfirm = useRef();

  const {loading, error, response, register} = useRegister();

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
    checkConfirmPassword(passwordRepeat, passwordText);
  }

  function checkConfirmPassword(passwordText, passwordToCompare) {
    passwordText == passwordToCompare
      ? setPasswordConfirmValid(1)
      : setPasswordConfirmValid(0);
  }

  function checkName(nameText) {
    setName(nameText);
    nameText.length > 2 ? setNameValid(1) : setNameValid(0);
  }

  function checkSurname(surnameText) {
    setSurname(surnameText);
    surnameText.length > 1 ? setSurnameValid(1) : setSurnameValid(0);
  }

  function registerHandler() {
    let conditions =
      nameValid &&
      emailValid &&
      passwordValid &&
      surnameValid &&
      passwordConfirmValid;
    if (conditions) {
      register(email, password, name, surname);
    } else {
      //TODO: add something that indicates invalid fields /done
      Alert.alert('EMPTY FIELD(S)!', "Don't leave empty fields");
    }
  }

  if (response) {
    //TODO: send something to login page using params and tell the user that they are registered
    let messageToPrint = 'Registered Sunccesfully 🎉';
    navigation.navigate('LogIn', {messageToPrint});
  }

  if (loading) {
    //TODO: maybe improve ActivityIndicator
    return <Loading />;
  }

  if (error) {
    if (error.code.includes('email-already-in-use')) {
      let messageToPrint = 'You are already registered 😅';
      navigation.navigate('LogIn', {messageToPrint});
    } else {
      Alert.alert('Looks like an error has occured', error.message);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={logIn_items.container}>
          <Input
            buttonTitle="Name"
            placeholder="John"
            onText={nameText => checkName(nameText)}
            currentColor={nameValid || !name.length ? '#0000' : 'red'}
            nextFocus={refSurname}
          />
          <Input
            buttonTitle="Surname"
            placeholder="Doe"
            onText={surnameText => checkSurname(surnameText)}
            currentColor={surnameValid || !surname.length ? '#0000' : 'red'}
            reference={refSurname}
            nextFocus={refMail}
          />
          <Input
            buttonTitle="Email Adress"
            placeholder="user@example.com"
            onText={userName => checkEmailText(userName)}
            currentColor={emailValid || !email.length ? '#0000' : 'red'}
            reference={refMail}
            nextFocus={refPassword}
          />
          <Input
            secureTextEntry={true}
            buttonTitle="Password"
            placeholder="L0ng!PAsSw0Rd:)"
            onText={passwordText => checkPasswordText(passwordText)}
            currentColor={passwordValid || !password.length ? '#0000' : 'red'}
            reference={refPassword}
            nextFocus={refPasswordConfirm}
          />
          <Input
            secureTextEntry={true}
            buttonTitle="Confirm Password"
            placeholder="L0ng!PAsSw0Rd:)"
            onText={passwordText => {
              setPasswordRepeat(passwordText);
              checkConfirmPassword(passwordText, password);
            }}
            currentColor={passwordConfirmValid ? '#0000' : 'red'}
            reference={refPasswordConfirm}
          />
          <SmallButton buttonTitle="Sign up" onSelect={registerHandler} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export {SignUp};
