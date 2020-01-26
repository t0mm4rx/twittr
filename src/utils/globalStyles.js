import colors from './colors';
import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  textInput: {
    borderWidth: 0.8,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    padding: 15,
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: colors.green,
    padding: 20,
    alignItems: 'center',
    elevation: 10,
  },
});

export default globalStyles;
