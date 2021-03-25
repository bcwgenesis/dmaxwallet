import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

import styles from './styles';

import ImageLogo from '../../assets/images/img_logo.png';

const SplashPage = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomePage');
    }, 1000);
  }, []);

  return (
    <View style={styles.main}>
      <Image source={ImageLogo} style={styles.logo} />
    </View>
  );
};

export default SplashPage;
