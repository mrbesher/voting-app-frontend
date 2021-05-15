import React from 'react';
import {ActivityIndicator, SafeAreaView, Text} from 'react-native';
import {theme} from '../styles/theme';

function Loading(props) {
  return (
    <SafeAreaView
      style={{padding: 150, alignItems: 'center'}}>
      <ActivityIndicator size="large" color={props.invert ? theme.SECONDARY_COLOR : theme.PRIMARY_COLOR} />
      <Text style={{color: props.invert ? theme.SECONDARY_COLOR : theme.PRIMARY_COLOR}}>{props.message ? props.message : null}</Text>
    </SafeAreaView>
  );
}

export {Loading};
