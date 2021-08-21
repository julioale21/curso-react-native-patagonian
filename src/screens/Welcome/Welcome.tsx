import React from 'react';
import { View } from 'react-native';
import Typography from '../../components/Typography';
import { Separator, DefaultButton } from '../../components';
import styles from './styles';

import { goToScreen, replaceRoute } from '../../navigation/controls';

// @ts-ignore
const WelcomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        Welcome Screen
      </Typography>
      <Separator size={15} />
      <DefaultButton
        text="Go To Tabs"
        textSize={16}
        onPress={() => replaceRoute('TabNavigator')}
      />
      <Separator size={10} />
      <DefaultButton
        text="Go To Experimental Screen"
        textSize={16}
        onPress={() => goToScreen('Experimental')}
        variant="secondary"
      />
    </View>
  );
};

export default WelcomeScreen;
