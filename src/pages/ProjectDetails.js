import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import moment from 'moment';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SmallButton, Loading} from '../components';
import {fakeStorage} from '../fakeStorage';
import {theme} from '../styles/theme';

const deviceSize = Dimensions.get('window');

function ProjectDetails(props) {
  const [options, setOptions] = useState([]);
  const [project, setProject] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fakeStorage
      .fetchProject(props.route.params)
      .then(serverResponse => {
        setProject(serverResponse);
        setOptions(serverResponse.candidates);
      })
      .catch(serverError => {
      });
  }, []);

  const moveOption = (offset, index) => {
    if (index + offset >= options.length || index + offset < 0) {
      return;
    }
    let list = options;
    const b = list[index];
    list[index] = list[index + offset];
    list[index + offset] = b;
    setOptions(list);
    setRefresh(!refresh);
  };

  function handleVotingRequest() {
    fakeStorage.addBallot(project['id'], options[0]['id']);
    props.navigation.navigate('ProjectDetails', project['id']);
  }

  function renderOption({item, index}) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          margin: 5,
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 5,
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
          }}>
          <Text>{item['info']}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                moveOption(-1, index);
              }}>
              <View style={{flex: 1, paddingRight: 5, paddingLeft: 5}}>
                <FontAwesome5 name="caret-up" color="grey" size={30} solid />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                moveOption(1, index);
              }}>
              <View style={{flex: 1, paddingRight: 5, paddingLeft: 5}}>
                <FontAwesome5 name="caret-down" color="grey" size={30} solid />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function RenderBody() {
    if (
      project['time_in_days'] -
        moment().diff(project['created_date'].toString(), 'days') <
      0
    ) {
      return (
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              color: theme.PRIMARY_COLOR,
              fontSize: theme.FONT_SIZE_LARGE,
            }}>
            THE ELECTION WINNER IS:
          </Text>
          <Text>{fakeStorage.getWinner(project['id'])}</Text>
        </View>
      );
    } else if (fakeStorage.didUserVote(global.loggedIn, project['id'])) {
      return (
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              color: theme.PRIMARY_COLOR,
              fontSize: theme.FONT_SIZE_LARGE,
            }}>
            You voted on this election!
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={options}
            extraData={refresh}
            renderItem={renderOption}
            // TODO: Add a cooler empty list component
            ListEmptyComponent={<Loading invert={1} />}
          />
          <SmallButton
            buttonTitle="Vote 🗳️"
            invert={true}
            onSelect={handleVotingRequest}
          />
        </View>
      );
    }
  }

  function RenderProjectDetails() {
    return (
      <View>
        <View
          style={{
            backgroundColor: theme.PRIMARY_COLOR,
            padding: 15,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: theme.SECONDARY_COLOR,
              fontSize: theme.FONT_SIZE_MEDIUM,
            }}>
            {project['title']}
          </Text>
        </View>
        <ScrollView style={{padding: 10}}>
          <Text style={{fontSize: theme.FONT_SIZE_SMALL}}>
            {project['description']}
          </Text>
        </ScrollView>
        <View style={{height: deviceSize.height / 3.2}}>
          <RenderBody />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={{backgroundColor: theme.SECONDARY_COLOR, flex: 1}}>
      {project == null ? <Loading /> : <RenderProjectDetails />}
    </SafeAreaView>
  );
}

export {ProjectDetails};
