/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
//TODO: remove when you get the real API
global.loggedIn = 0;
AppRegistry.registerComponent(appName, () => App);
