import React from 'react';
import { View } from 'react-native';
import { Typography, DefaultButton, Separator } from '../../components';
import styles from './styles';
import { resetNavigation } from '../../navigation/controls';

const HistoryScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20}>Home Screen</Typography>
      <Separator size={10} />
      <DefaultButton text="Logout" onPress={resetNavigation} />
    </View>
  );
};

export default HistoryScreen;
