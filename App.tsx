import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from './src/utils/theme';
import { DEVICE_WITDH } from './src/utils/dimensions';
import { DefaultButton, AlertModal } from './src/components';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

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
        text="Mostrar Hola Mundo"
        onPress={showModal}
        variant="primary"
      />

      <AlertModal
        message="Hola Mundo 2"
        onPressPrimaryButton={hideModal}
        primaryButtonText="Ok"
        visible={isModalVisible}
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
});

export default App;
