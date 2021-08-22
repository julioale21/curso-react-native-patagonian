import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import { Separator, AlertModal, DefaultButton } from '../../components';
import { colors } from '../../utils/theme';
import Typography from '../../components/Typography';
import styles from './styles';

const arr = Array.from({ length: 6 }, (_, index) => index);

const ExperimentalScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: colors.lightBlue }} />
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: colors.lightBlue,
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

export default ExperimentalScreen;
