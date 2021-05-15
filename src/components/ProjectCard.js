import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {CircleCount} from '../components';
import {project_style} from '../styles/components_styles';
function ProjectCard(props) {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={project_style.container}>
        <Text style={project_style.user_style}>{props.item['title']}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flex: 3}}>
            <Text style={project_style.text_style} numberOfLines={8}>
              {props.item['description']}
            </Text>
            <Text style={project_style.date_style}>
              {props.item['created_date'].toString()}
            </Text>
          </View>
          <CircleCount />
        </View>
      </View>
    </TouchableOpacity>
  );
}
export {ProjectCard};
