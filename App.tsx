/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, View } from 'react-native';
import { colors } from './src/utils/theme';
import { DEVICE_WITDH } from './src/utils/dimensions';
import { DefaultButton } from './src/components';

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

      <Modal animationType="fade" transparent visible={isModalVisible}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
            flex: 1,
            width: '100%',
          }}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: colors.white,
              borderRadius: 13,
              justifyContent: 'center',
              paddingBottom: 20,
              paddingTop: 10,
              width: '65%',
            }}>
            <Text style={{ marginVertical: 20 }}>Hola Mundo</Text>
            <DefaultButton
              text="Ok"
              onPress={hideModal}
              additionalStyle={{ height: 40 }}
            />
          </View>
        </View>
      </Modal>
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
