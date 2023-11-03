import * as React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
const UNGUARDED = require('../assets/unguarded.png');
import QRCode from 'react-native-qrcode-svg';
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';
import { Linking } from 'react-native';

export default function SecondScreen({ navigation, route }) {
  let logoFromFile = require('../assets/unguarded.png');
  return (
    <View style={styles.container}>
      <QRCode value="https://qrco.de/beRqJ7" logo={logoFromFile} size={300} />
      <Button
        color="orange"
        title="UNLOCK STORE"
        onPress={() => Linking.openURL('http://www.unguarded.com')}
      />
      <Button
        color="orange"
        title="BACK"
        onPress={() => navigation.popToTop()}
      />
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
