import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {button_style} from '../styles/components_styles';
import {theme} from '../styles/theme';

function SmallButton(props) {
  const selectedBackgroundColor = props.invert
    ? theme.PRIMARY_COLOR
    : button_style[props.isText ? 'container_register' : 'container']['backgroundColor'];
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View
        style={[
          button_style[props.isText ? 'container_register' : 'container'],
          {backgroundColor: selectedBackgroundColor},
        ]}>
        <Text style={button_style[props.isText || props.invert ? 'text_register' : 'text']}>
          {' '}
          {props.buttonTitle}{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export {SmallButton};
