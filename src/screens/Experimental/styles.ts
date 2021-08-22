import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';
import { DEVICE_WITDH } from '../../utils/dimensions';

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 30,
    width: '100%',
  },
  title: {
    marginBottom: 10,
  },
  image: {
    aspectRatio: 1,
    minHeight: 50,
    width: DEVICE_WITDH * 0.3,
  },
});

export default styles;
