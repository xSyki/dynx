import { Link } from '@react-navigation/native';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function Eve() {
  return (
    <SafeAreaView style={styles.container}>
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
