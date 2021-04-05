import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import {deviceWidth} from '../../utils';

import styles from './styles';

const ScanQRPage = ({navigation}) => {
  const [isLoadingScan, setIsLoadingScan] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  let scannerRef = useRef(null);

  const onSuccessRead = e => {
    const qrData = e.data.split(':');

    navigation.navigate('TransferPage', {
      data: qrData.length > 1 ? qrData[1].trim() : qrData[0],
    });
  };

  const makeSlideOutTranslation = (translationType, fromValue) => {
    return {
      from: {
        [translationType]: -((deviceWidth() / 2) * 0.65),
      },
      to: {
        [translationType]: fromValue,
      },
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backIconContainer}>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <QRCodeScanner
        ref={node => (scannerRef = node)}
        onRead={onSuccessRead}
        topViewStyle={styles.zeroContainer}
        bottomViewStyle={styles.zeroContainer}
        cameraStyle={styles.camera}
        showMarker
        customMarker={
          errorMessage ? (
            <View />
          ) : (
            <View style={styles.rectangleContainer}>
              {isLoadingScan ? (
                <ActivityIndicator size="large" color={'grey'} />
              ) : (
                <>
                  <View style={styles.topOverlay} />
                  <View style={styles.overlayContainer}>
                    <View style={styles.leftAndRightOverlay} />

                    <View style={styles.rectangle}>
                      <Animatable.View
                        style={styles.scanBar}
                        direction="alternate-reverse"
                        iterationCount="infinite"
                        duration={1700}
                        easing="linear"
                        animation={makeSlideOutTranslation(
                          'translateY',
                          (deviceWidth() / 2) * 0.65,
                        )}
                      />
                    </View>

                    <View style={styles.leftAndRightOverlay} />
                  </View>

                  <View style={styles.bottomOverlay} />
                </>
              )}
            </View>
          )
        }
      />
    </SafeAreaView>
  );
};

export default ScanQRPage;
