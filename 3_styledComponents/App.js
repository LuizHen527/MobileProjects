import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ButtonGreen, ButtonRed } from './.expo/src/components/button/button';
import { Container } from './.expo/src/components/container/container';
import { Texto, Title } from './.expo/src/components/title/title';
import { ImagemFundo, Logo } from './.expo/src/components/image/image';

const image = {uri: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D'};

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
    <Container>
    <StatusBar style="auto" />

    <ImagemFundo source={image} resizeMode="cover">

      {/* <Logo 
      
      source={{uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/11417551-design-de-icone-de-contador-eletrico-gratis-vetor.jpg'}}
      /> */}

      

      <Title >Contador</Title>
      <Title >{count}</Title>
      
      <ButtonGreen  onPress={incrementar}>
        <Texto>Incrementar</Texto>
      </ButtonGreen>

      <ButtonRed onPress={decrementar}>
        <Texto>decrementar</Texto>
      </ButtonRed>

      
      </ImagemFundo>
      
    </Container>
  );
}
