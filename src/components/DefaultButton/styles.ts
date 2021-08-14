import { colors } from './../../utils/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.mainOrange,
    borderColor: colors.mainOrange,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 10,
    height: 50,
    width: '80%',
  },
  primary: {
    backgroundColor: colors.mainOrange,
    borderColor: colors.mainOrange,
  },
  secondary: {
    backgroundColor: colors.white,
    borderColor: colors.mainOrange,
  },
});

export const buttonTextColors = {
  primary: colors.white,
  secondary: colors.mainOrange,
};

export default styles;
