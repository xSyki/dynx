import { StyleSheet, Text, SafeAreaView, AppRegistry } from 'react-native';
import GameMode from './src/Components/GameMode/GameMode';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Eve from './src/Components/Eve/Eve';

const Stack = createNativeStackNavigator();

export default function App() {
  return <GameMode />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
