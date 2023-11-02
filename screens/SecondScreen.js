import * as React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
const UNGUARDED = require('../assets/unguarded.png');
import QRCode from 'react-native-qrcode-svg';
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';

export default function SecondScreen({ navigation, route }) {
  let logoFromFile = require('../assets/unguarded.png');
  return (
    <View style={styles.container}>
      <QRCode value="https://qrco.de/beRqJ7" logo={logoFromFile} size={290} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    alignSelf: 'center',
    width: 350,
    height: 220,
  },
  buttons: {
    color: 'orange',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
