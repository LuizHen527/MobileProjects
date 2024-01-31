import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ContainerApp } from './styles';
import { Header } from './src/components/header';
import { Home } from './src/screens/home';

export default function App() {

  
  const [ fontLoaded, fontError ] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  });

  //Validacao de carregamento de fontes
  if(!fontLoaded && !fontError)
  {
    return null;
  }
  return (
    <ContainerApp>
      <StatusBar/>

      <Header/>

      <Home/>
      
    </ContainerApp>
  );
}
