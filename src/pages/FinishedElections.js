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
import {CircleCount, Loading, SmallButton, ProjectCard, PageHeader} from '../components';

function FinishedElections(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fakeStorage
      .fetchFinishedProjects()
      .then(serverResponse => {
        setProjects(serverResponse);
      })
      .catch(serverError => {});
  }, []);

  const handleLogoutRequest = () => {
    global.loggedIn = 0;
    props.navigation.navigate('LogIn', {messageToPrint: ' '});
  };

  function renderProject({item}) {
    return (
      <ProjectCard
        item={item}
        onSelect={() => {
          props.navigation.navigate('ProjectDetails', item['id']);
        }}
      />
    );
  }

  return (
    <SafeAreaView style={{backgroundColor: theme.PRIMARY_COLOR, flex: 1}}>
      <PageHeader onSelect={handleLogoutRequest} title="Finished" />
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

export {FinishedElections};
