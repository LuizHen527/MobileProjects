import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

//Import das bibliotecas
import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

export default function App() {

  const [ history, setHistory] = useState({});
  const [ authenticated, setAuthenticated ] = useState(false);
  const [ biometricExists, setBiometricExists ] = useState(false);

  // Step 1: funcao que valida se o aparelho tem biometria ou nao
  async function CheckExistsAuthenticates(){
    // Validar se o aparelho tem acesso a biometria 
    const compatible = await LocalAuthentication.hasHardwareAsync();
    
    //guarda a informacao que o LocalAuthentication retornou
    setBiometricExists(compatible);

    //Consultar validacoes existentes
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();

    //Mostra o tipo de validacao no console
    console.log(LocalAuthentication.AuthenticationType[ types[0] ]);
  };

  async function handleAuthentication(){
    const biometric = await LocalAuthentication.isEnrolledAsync();

    //Validar se existe uma biometria cadastrada
    if(!biometric){
      return alert(
        "Falha ao logar.",
        "Nao foi encontrado nenhuma biometria cadastrada."
      )
    }

    //Caso exista =>
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login com biometria'
    })

    setAuthenticated(auth.success)

    if( auth.success ){
      SetHistory()
    }
  };

  async function SetHistory(){
    const objAuth = {
      dateAuthenticate : moment().format("DD/MM/YYYY HH:mm:ss")
    };

    await AsyncStorage.setItem("authenticate", JSON.stringify(objAuth));

    await setHistory(objAuth);
  }

  async function GetHistory(){
    const objAuth = await AsyncStorage.getItem("authenticate");

    if(objAuth){
      setHistory( JSON.parse( objAuth ) )
    }
  }

  useEffect(() => {
    CheckExistsAuthenticates();

    GetHistory();
  }, [])
  return (
    <View style={styles.container}>

      {/* Step 2: Mostra na tela se o celular possui ou nao a biometria ou faceId */}
      <Text style={styles.title}>
        {biometricExists ? 'Seu dispositivo e compativel com a biometria' : 
        'Seu dispositivo nao suporta o faceId ou a biometria'}
      </Text>

      <TouchableOpacity style={styles.btnAuth} onPress={() => handleAuthentication()}>
        <Text style={styles.txtAuth}>Autenticar acesso</Text>
      </TouchableOpacity>

      <Text style={[styles.txtReturn,{color: authenticated ? 'green' : 'red'}]}>
        {authenticated ? 'Autenticado' : 'Nao autenticado'}
      </Text>

      {
        history.dateAuthenticate ? <Text style={styles.txtHistory}>Ultimo acesso em { history.dateAuthenticate }</Text>
        : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFF5FF',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
    width: '70%',

  },

  btnAuth: {
    padding: 16,
    borderRadius: 15,
    margin: 20,
    backgroundColor: '#5356FF'
  },

  txtAuth: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },

  txtReturn: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 50,
  },

  txtHistory: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#858353",
    position: 'absolute',
    bottom: 120,
  },
});
