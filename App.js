import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Exemplo01 from './src/exemplos/ex-01';
import Exemplo02 from './src/exemplos/ex-02';

import Atividade01 from './src/Atividades/atv-01';
import Atividades02 from './src/Atividades/atv-02/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividades02 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c72591',
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
});

