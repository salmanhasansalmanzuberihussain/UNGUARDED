import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import { Video } from 'expo-av';
import React from 'react';

export default function ThirdScreen({ navigation, route }) {
  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require('../assets/unguardedsticker.mp4')}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <Button
        color="orange"
        title="UNLOCK STORE"
        onPress={() => navigation.push('Third')}
      />
      <Button
        color="orange"
        title="BACK"
        onPress={() => navigation.push('Second')}
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
  video: {
    width: 350,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
