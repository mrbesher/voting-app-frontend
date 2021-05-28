import React, {useState} from 'react';
import {Text, View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {SmallButton} from '../components';

function ProjectDetails(props) {
  const [options, setOptions] = useState(props.route.params.candidates);
  return (
    <SafeAreaView>
      <Text>Details of {props.route.params.title}</Text>
    </SafeAreaView>
  );
}

export {ProjectDetails};
