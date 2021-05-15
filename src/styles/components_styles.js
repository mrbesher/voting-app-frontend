import {StyleSheet, Dimensions} from 'react-native';
import {theme} from './theme';

const deviceSize = Dimensions.get('window');

const button_style = StyleSheet.create({
  container: {
    backgroundColor: theme.SECONDARY_COLOR,
    borderRadius: 20,
    alignItems: 'center',
    width: 250,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  text: {
    color: theme.PRIMARY_COLOR,
    fontWeight: 'bold',
  },
  text_register: {
    color: theme.SECONDARY_COLOR,
  },
  container_register: {
    alignSelf: 'center',
  },
});

const input_style = StyleSheet.create({
  inputContainer: {
    backgroundColor: theme.SECONDARY_COLOR,
    padding: 10,
    paddingVertical: 10,
    margin: 5,
    borderRadius: 10,
    width: 250,
    alignSelf: 'center',
  },
  text: {
    color: theme.PRIMARY_COLOR,
    fontWeight: 'bold',
  },
  inputField: {
    color: '#101010',
  },
});

const project_style = StyleSheet.create({
  container: {
    backgroundColor: theme.SECONDARY_COLOR,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  user_style: {
    fontWeight: 'bold',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#456268',
    padding: 5,
  },
  text_style: {
    padding: 10,
  },
  date_style: {
    fontSize: 10,
    padding: 10,
  },
  icon_style: {
    color: theme.PRIMARY_COLOR,
    fontSize: 25,
  },
});

const circle_count_style = StyleSheet.create({
  container: {
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 100,
    width: deviceSize.width / 5,
    height: deviceSize.width / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_style: {
    color: theme.PRIMARY_COLOR,
    fontSize: 35,
  },
  inner_circle: {
    backgroundColor: theme.SECONDARY_COLOR,
    borderRadius: 100,
    width: deviceSize.width / 5 *.95,
    height: deviceSize.width / 5 * .95,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {input_style, button_style, project_style, circle_count_style};
