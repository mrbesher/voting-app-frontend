import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../styles/theme';

function PageHeader(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'flex-start'
      }}>
      <TouchableOpacity>
        <FontAwesome5
          name="cog"
          color={theme.SECONDARY_COLOR}
          size={30}
          solid
        />
      </TouchableOpacity>

      <Text
        style={{
          color: theme.SECONDARY_COLOR,
          alignSelf: 'center',
          fontSize: theme.FONT_SIZE_LARGE,
          fontWeight: 'bold',
        }}>
        {props.title}
      </Text>
      <TouchableOpacity onPress={props.onSelect}>
        <FontAwesome5
          name="sign-out-alt"
          color={theme.SECONDARY_COLOR}
          size={30}
          solid
        />
      </TouchableOpacity>
    </View>
  );
}

export {PageHeader};
