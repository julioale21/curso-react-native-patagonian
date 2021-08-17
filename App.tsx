/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors } from './src/utils/theme';
import { DEVICE_WITDH } from './src/utils/dimensions';
import { DefaultButton, AlertModal } from './src/components';
import Typography from './src/components/Typography';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: colors.veryLightBlue }} />
      <ScrollView
        style={{
          backgroundColor: colors.veryLightBlue,
          flex: 1,
          width: '100%',
        }}>
        <View style={styles.mainContainer}>
          <Typography color={colors.mainOrange} size={30} variant="bold">
            Texto
          </Typography>
          <Typography variant="medium">
            <Text>Subtitulo</Text>
          </Typography>
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            resizeMode="contain"
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            resizeMode="contain"
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            resizeMode="contain"
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            resizeMode="contain"
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            resizeMode="contain"
            style={styles.image}
          />
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
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.veryLightBlue,
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 30,
    width: '100%',
  },
  title: {
    marginBottom: 10,
  },
  image: {
    minHeight: 100,
    width: DEVICE_WITDH * 0.5,
  },
});

export default App;
