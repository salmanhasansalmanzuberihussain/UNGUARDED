import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Image, Text } from 'react-native';
const UNGUARDED = require('../assets/unguarded.png');
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={UNGUARDED} style={{ width: 500, height: 500 }} />
      <RNSlidingButton
        style={{
          width: 370,
          backgroundColor: 'white',
        }}
        height={30}
        onSlidingSuccess={() =>
          navigation.navigate('Second', { language: 'french' })
        }
        slideDirection={SlideDirection.RIGHT}
      >
        <View>
          <Image source={UNGUARDED} style={{ width: 50, height: 50 }} />
        </View>
      </RNSlidingButton>
      <StatusBar style="auto" />
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
