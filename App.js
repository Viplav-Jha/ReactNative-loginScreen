import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screen/Login';
import Signup from './src/screen/Signup';
import Welcome from './src/screen/Welcome';


export default function App() {
  return (
    <View style={styles.container}>
      <Welcome/>
      <Login/>
      {/* <Signup/> */}
    </View>
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
