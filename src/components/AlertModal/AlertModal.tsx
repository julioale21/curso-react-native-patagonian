import React from 'react';
import { Modal, Text, View } from 'react-native';
import { DefaultButton } from '../../components';

import styles from './styles';

interface Props {
  message: string;
  onPressPrimaryButton: () => void;
  primaryButtonText: string;
  onPressSecondaryButton?: () => void;
  secondaryButtonText?: string;
  visible: boolean;
}

const AlertModal = ({
  message,
  onPressPrimaryButton,
  primaryButtonText,
  onPressSecondaryButton,
  secondaryButtonText,
  visible,
}: Props) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.mainContainer}>
        <View style={styles.innerAlert}>
          <Text style={styles.text}>{message}</Text>
          <DefaultButton
            text={primaryButtonText}
            onPress={onPressPrimaryButton}
            additionalStyle={styles.button}
          />
          {secondaryButtonText && onPressSecondaryButton ? (
            <DefaultButton
              additionalStyle={styles.button}
              onPress={onPressSecondaryButton}
              text={secondaryButtonText}
              variant="secondary"
            />
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

AlertModal.defaultProps = {
  onPressSecondaryButton: () => {},
  secondaryButtonText: '',
};

export default AlertModal;
