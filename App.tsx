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
import { DefaultButton, AlertModal, Separator } from './src/components';
import Typography from './src/components/Typography';

const arr = Array.from({ length: 6 }, (_, index) => index);

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
          <Separator size={10} />
          {arr.map(item => (
            <View key={`image-${item}`}>
              <Image
                resizeMode="contain"
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={styles.image}
              />
              <Separator size={10} />
            </View>
          ))}
          <View style={styles.horizontalContainer}>
            <Image
              resizeMode="contain"
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              style={styles.image}
            />
            <Separator isHorizontal size={10} />
            <Image
              resizeMode="contain"
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              style={styles.image}
            />
          </View>
          <Separator size={10} />
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
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
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
    aspectRatio: 1,
    minHeight: 50,
    width: DEVICE_WITDH * 0.3,
  },
});

export default App;
