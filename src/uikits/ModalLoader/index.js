// @flow
import React from 'react';
import {View, Modal, ActivityIndicator, Text} from 'react-native';

import styles from './styles';

import Color from '../../styles/color';

type Props = {
  visible: boolean,
};

function ModalLoader({visible}: Props) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.main}>
        <ActivityIndicator size="large" color={Color.WHITE} />
        <Text style={styles.loadingLabel}>Processing request ...</Text>
      </View>
    </Modal>
  );
}

ModalLoader.defaultProps = {
  visible: false,
};

export default React.memo<Props>(ModalLoader);
