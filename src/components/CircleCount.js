import React from 'react';
import {View, Text} from 'react-native';
import {circle_count_style} from '../styles/components_styles';

function CircleCount(props) {
  return (
    <View style={circle_count_style.sidebar}>
      <View style={circle_count_style.container}>
        <View style={circle_count_style.inner_circle}><Text style={circle_count_style.text_style}>{props.text ? props.text : '0'}</Text></View>
      </View>
    </View>
  );
}

export {CircleCount};
