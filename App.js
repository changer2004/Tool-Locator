import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View label='TEST' style={{ flex: 1, backgroundColor: 'powderblue' }} >
        <Text style={styles.fontcolor}>Tool Locator</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
      <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontcolor: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 70,
    fontWeight: 'bold',
    fontSize: 25,
  },
});
