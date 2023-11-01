import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default function SecondScreen({ navigation, route }) {
  let language = route.params.language;
  let greeting = language === 'french' ? 'Bonjour' : 'Hello';
  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <Button
        color="orange"
        title="UNGUARDED"
        onPress={() => navigation.push('Third')}
      />
      <Button
        color="orange"
        title="UNGUARDED"
        onPress={() => {
          navigation.dispatch(StackActions.replace('Third'));
        }}
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
