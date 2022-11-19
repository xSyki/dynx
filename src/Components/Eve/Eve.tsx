import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { useGameStore } from '../../stores/gameStore';

export default function Eve() {
  const [, { setGameMode }] = useGameStore();

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Back" onPress={() => setGameMode(undefined)} />
      <SafeAreaView>
        <Text>EVE</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
