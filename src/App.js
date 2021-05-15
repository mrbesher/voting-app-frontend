import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  LogIn,
  SignUp,
  Projects,
  VotedProjects,
  FinishedElections,
  ProjectDetails,
} from './pages';
import {theme} from './styles/theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ProjectsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Projects" component={Projects} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
    </Stack.Navigator>
  );
}

function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => generateIcon(focused, color, route),
        tabBarLabel: () => null,
      })}>
      <Tab.Screen name="ProjectsStack" component={ProjectsStack} />
      <Tab.Screen name="Voted" component={VotedProjects} />
      <Tab.Screen name="Finished" component={FinishedElections} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={() => ({headerShown: false})}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="MainScreen" component={MainStack} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

function generateIcon(focused, color, route) {
  let iconName;
  switch (route.name) {
    case 'ProjectsStack':
      iconName = 'home';
      color = focused ? theme.PRIMARY_COLOR : 'grey';
      break;
    case 'Voted':
      iconName = 'tasks';
      color = focused ? theme.PRIMARY_COLOR : 'grey';
      break;
    case 'Finished':
      iconName = 'check-square';
      color = focused ? theme.PRIMARY_COLOR : 'grey';
      break;
    default:
      break;
  }
  if (focused) {
    return (
      <FontAwesome5
        name={iconName}
        color={color}
        size={30}
        solid></FontAwesome5>
    );
  }
  return (
    <FontAwesome5 name={iconName} color={color} size={30} light></FontAwesome5>
  );
}
