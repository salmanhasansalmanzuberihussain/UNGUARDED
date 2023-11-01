import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Image } from 'react-native';
const UNGUARDED = require('../assets/unguarded.png');

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={UNGUARDED} style={{ width: 500, height: 500 }} />
      <Button
        title="UNGUARDED"
        color="#f3ad35"
        onPress={() => navigation.navigate('Second', { language: 'french' })}
      />
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
