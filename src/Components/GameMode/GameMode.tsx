import { StyleSheet, SafeAreaView, Button } from 'react-native';
import { EnumGameMode, useGameStore } from '../../stores/gameStore';
import Eve from '../Eve/Eve';
import Teams from '../Teams/Teams';

export default function GameMode() {
  const [{ gameMode }, { setGameMode }] = useGameStore();

  return (
    <SafeAreaView style={styles.container}>
      {!gameMode && (
        <SafeAreaView>
          <Button onPress={() => setGameMode(EnumGameMode.EVE)} title="1vs1" />
          <Button
            onPress={() => setGameMode(EnumGameMode.TEAMS)}
            title="Teams"
          />
        </SafeAreaView>
      )}

      {gameMode === EnumGameMode.EVE && <Eve />}
      {gameMode === EnumGameMode.TEAMS && <Teams />}
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
