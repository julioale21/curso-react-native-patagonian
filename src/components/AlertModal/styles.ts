import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  button: {
    height: 40,
  },
  innerAlert: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 13,
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 10,
    width: '65%',
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  text: {
    marginVertical: 20,
  },
});

export default styles;
