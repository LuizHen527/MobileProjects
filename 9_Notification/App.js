import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//Importar biblioteca e recursos
import * as Notifications from 'expo-notifications';

//solicitar as permissoes de notificacao
Notifications.requestPermissionsAsync();

//definir como as notificacoes devem ser tratas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    //Mostra o alerta quando a notificacao for recebida
    shouldShowAlert: true,

    //Toca som ou nao, ao notificar
    shouldPlaySound: true,

    //Numero de notificacoes no icone do app
    shouldSetBadge: false,
  })
})

export default function App() {

  //Funcao para lidar com a chamada de notificacao
  const handleCallNotifications = async () => {

    //obtem o status das permissoes
    const {status} = await Notifications.getPermissionsAsync();

    //Verifica se o usuario ativou ou nao as notificacoes
    if(status != 'granted') {
      alert('Voce nao deixou as notificacoes salvas');
      return;
    };

    //obter o token de envio de notificao
    // const token = await Notifications.getExpoPushTokenAsync()

    // agendar notificao para ser exibida a cada 5sec
    await Notifications.scheduleNotificationAsync({
      content:{
        title: "Wake up, Neo...",
        body: "The Matrix has you..."
      },
      trigger: {
        seconds: 5,
      },
    })
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnNotification} onPress={() => handleCallNotifications()}>
        <Text style={styles.text}>Clique aqui para a notificacao</Text>
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
  },

  btnNotification: {
    width: '80%',
    height: 80,
    backgroundColor: 'black',
    color: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  text: {
    color: '#2ff924',
    fontSize: 18,
  }
});
