import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video } from 'expo-av';

export default function SecondScreen({ navigation, route }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require('../../UNGUARDED/unguardedsticker.mp4')}
        useNativeControls
        resizeMode="contain"
        ignoreSilentSwitch={'ignore'}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          color="orange"
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
      <Button
        color="orange"
        title="UNGUARDED"
        onPress={() => navigation.push('Third')}
      />
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
