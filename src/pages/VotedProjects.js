import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  Alert,
  ActivityIndicator,
  Button,
  TouchableOpacity,
} from 'react-native';
import {fakeStorage} from '../fakeStorage';
import {project_style} from '../styles/components_styles';
import {theme} from '../styles/theme';
import {CircleCount, Loading, SmallButton, ProjectCard} from '../components';

function VotedProjects({navigation}) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fakeStorage
      .fetchUserProjects(loggedIn)
      .then(serverResponse => {
        setProjects(serverResponse);
      })
      .catch(serverError => {
      });
  }, []);

  const handleLogoutRequest = () => {
    global.loggedIn = 0;
    navigation.navigate('LogIn', {messageToPrint: ' '});
  };

  function renderProject({item}) {
    return (
      <ProjectCard
        item={item}
        onSelect={() => {
          navigation.navigate('ProjectDetails', item['id']);
        }}
      />
    );
  }

  return (
    <SafeAreaView style={{backgroundColor: theme.PRIMARY_COLOR, flex: 1}}>
      <SmallButton buttonTitle="👋 Logout 👋" onSelect={handleLogoutRequest} />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={projects}
        renderItem={renderProject}
        // TODO: Add a cooler empty list component
        ListEmptyComponent={<Loading invert={1} />}
      />
    </SafeAreaView>
  );
}

export {VotedProjects};
