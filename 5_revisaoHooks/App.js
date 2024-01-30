import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const[count, setCount] = useState(0);

  //funcao de incremento
  const incrementar = () => {
    setCount(count + 1)
  }

  const decrementar = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])


  return (
    <View style={styles.container}>

      <Text style={styles.txt2}>Contador</Text>
      <Text style={styles.txt2}>{count}</Text>

      <TouchableOpacity style={styles.btn} onPress={incrementar}>
        <Text style={styles.txt}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn2} onPress={decrementar}>
        <Text style={styles.txt}>decrementar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFD2',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },

  btn: {
    borderColor: 'black',
    backgroundColor: 'green',
    color: 'white',
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  btn2: {
    borderColor: 'black',
    backgroundColor: 'red',
    color: 'white',
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  txt: {
    color: 'white',
    fontSize: 22,
  },

  txt2: {
    fontSize: 50,
  },
});
