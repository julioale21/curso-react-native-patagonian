import React from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { colors } from './src/utils/theme';
import { DEVICE_WITDH } from './src/utils/dimensions';
import { DefaultButton } from './src/components';

const showAlert = () => {
  Alert.alert('Hola');
};

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Texto</Text>
      <Text>Subtitulo</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        resizeMode="contain"
        style={styles.image}
      />
      <DefaultButton
        //additionalStyle={styles.button}
        color={colors.mainOrange}
        onPress={showAlert}
        text="Hola"
        textSize={24}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.veryLightBlue,
    flex: 1,
    height: 100,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: colors.mainOrange,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    minHeight: 100,
    width: DEVICE_WITDH * 0.5,
  },
  button: {
    backgroundColor: 'green',
    width: 50,
  },
});

export default App;
