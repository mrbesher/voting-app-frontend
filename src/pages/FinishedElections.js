import React from 'react';
import {Text, View} from 'react-native';
import {SmallButton} from '../components';

function FinishedElections({navigation}) {
  return (
    <View>
      <Text>Projects</Text>
      <SmallButton
        buttonTitle="OUT"
        onSelect={() => {
          global.loggedIn = 0;
          navigation.navigate('LogIn', {messageToPrint: ' '});
        }}
      />
    </View>
  );
}

export {FinishedElections};
