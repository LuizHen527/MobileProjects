import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image
        style={styles.image}
        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png'}}
      />

      <Text style={styles.text}>Login</Text>

      <TextInput 
      style={styles.input} 
      defaultValue='Email'
      label="Email"
      />

      <TextInput 
      style={styles.input} 
      defaultValue='Senha'
      label="Senha"
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Entrar</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5353ec',
    gap: 40,
  },

  image: {
    width: '75%',
    height: 80,
  },

  text: {
    color: 'white',
    fontSize: 45,
    
  },

  input: {
    width: '90%',
    height: 40,
    backgroundColor: '#e9e9e9',
    borderRadius: 3,
  },

  btn: {
    borderColor: 'black',
    backgroundColor: 'red',
    color: 'white',
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  btnTxt: {
    color: 'white',
    fontSize: 20,
  },
});
