import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/person/person';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { SingleDay_400Regular } from '@expo-google-fonts/single-day';

export default function App() {

  let [fontsLoaded, fontError] = useFonts ({
    Inter_900Black,
    SingleDay_400Regular,
  });

  if (!fontsLoaded && !fontError){
    return null;
  }

  //Simulando uma lista
  const peopleList = [
    {id: '1', name: 'Carlos', age: '37'},
    {id: '2', name: 'Eduardo', age: '45'},
    {id: '3', name: 'Bruce Wayne', age: '34'},
    {id: '4', name: 'Peter Parker', age: '22'}
  ]

  return (
    <SafeAreaView>
      <StatusBar/>

    {/* Usando flat list */}
    <FlatList
      //Da onde vem
      data={peopleList}
      keyExtractor={(item) => item.id}

      renderItem={({item}) => (
        //Exibir cada item da lista
        <Person
          name={item.name}
          age={item.age}
        />
      )}

    />

    </SafeAreaView>
  );
}

