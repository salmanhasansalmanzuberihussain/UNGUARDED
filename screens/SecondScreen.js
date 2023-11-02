import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function SecondScreen({ navigation, route }) {
  let logoFromFile = require('../assets/unguarded.png');
  return (
    <View style={styles.container}>
      <QRCode value="https://qrco.de/beRqJ7" logo={logoFromFile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
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
