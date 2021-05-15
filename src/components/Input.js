import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {input_style} from '../styles/components_styles';

function Input(props) {
  return (
    <View style={input_style.container}>
      <View
        style={[
          input_style.inputContainer,
          {borderColor: props.currentColor, borderWidth: 1},
        ]}>
        <Text style={input_style.text}> {props.buttonTitle} </Text>
        <TextInput
          style={input_style.inputField}
          placeholderTextColor="#8f8f8f"
          secureTextEntry={props.secureTextEntry}
          placeholder={props.placeholder}
          onChangeText={value => props.onText(value)}
          keyboardType={props.type}
          autoCompleteType={props.fieldType}
          keyboardType={
            props.fieldType == 'email' ? 'email-address' : 'default'
          }
          ref={props.reference}
          blurOnSubmit={props.nextFocus ? false : true}
          onSubmitEditing={() => props.nextFocus && props.nextFocus.current.focus()}
        />
      </View>
    </View>
  );
}
export {Input};
