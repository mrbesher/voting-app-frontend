import {StyleSheet, Dimensions} from 'react-native';
import {theme} from './theme';

const deviceSize = Dimensions.get('window');

const logIn_items = StyleSheet.create({
    container: {
        backgroundColor: theme.PRIMARY_COLOR,
        justifyContent:"center",
        height: deviceSize.height,
        alignItems: 'center',
      },
      message: {
        color: 'white',
        fontSize: theme.FONT_SIZE_LARGE,
        margin: 15,
      }
})
export {logIn_items};
