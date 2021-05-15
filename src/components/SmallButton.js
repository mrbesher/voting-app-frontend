import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {button_style} from '../styles/components_styles';

function SmallButton(props) {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={button_style[props.isText ? 'container_register' : 'container']}>
        <Text style={button_style[props.isText ? 'text_register' : 'text']}>
          {' '}
          {props.buttonTitle}{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export {SmallButton};
