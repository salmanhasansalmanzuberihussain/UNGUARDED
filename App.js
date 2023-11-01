import { StatusBar } from 'expo-status-bar';
import SlideButton from 'rn-slide-button';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
const UNGUARDED = require('./assets/unguarded.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={UNGUARDED} style={{ width: 500, height: 500 }} />
      <SlideButton title="Slide To Unlock" />;
      <Button
        title="UNGUARDED"
        onPress={() => alert('Button pressed')}
        color="#f3ad35"
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
});
