import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello word</Text>

      <TextInput
        style={styles.input}
        defaultValue='Exemplo de input'
      />

      <Image
        style={styles.image}
        source={{uri: 'https://lazycuriokitty.files.wordpress.com/2013/06/36345108.jpg'}}
      />

      <Button
        title="NADA"
        color="#d600ff"
        style={styles.btn}
      />

      {/* Botao */}
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text2}>Exemplo de botao</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffee',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
  },

  text: {
    color: '#d600ff',
    fontSize: 50,
  },

  text2: {
    color: 'white',
  },

  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#d600ff',
    padding: 10,
    color: 'white',
  },

  image: {
    width: '90%',
    height: '50%',
  },

  btn: {
    borderColor: '#d600ff',
    border: 6,
    backgroundColor: '#d600ff',
    color: 'white',
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
