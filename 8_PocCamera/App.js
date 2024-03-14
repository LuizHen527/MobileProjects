import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { useEffect, useState, useRef } from 'react';

//Import da camera
import { Camera, CameraType } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library';

// Quando salvar a foto - ter opcao de apagar da galeria
// Botao pra ativar o flash
// Forma de recarregar o autofocus
// Colocar app de video no projeto

export default function App() {

  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(false)
  //Coloca se vai ser a camera da frente(front) ou de traz(back)
  const [ tipoCamera, setTipoCamera ] = useState(Camera.Constants.Type.back);

  async function CapturePhoto(){
    if(cameraRef){
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri);

      setOpenModal(true);

      console.log(photo);
    }
  };

  async function ClearPhoto(){
    setPhoto(null);
    setOpenModal(false)
  };

  async function SavePhoto(){
    if(photo){
      await MediaLibrary.createAssetAsync(photo).then(() => {
        alert('Sucesso', 'Foto salva na galeria')
      }).catch(error => {
        alert("Erro ao gravar foto")
      })
    }
  }

  useEffect(() => {
    ( async () => {
      //Pede permissao para acessar a camera
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      //Pede permissao para acessar a galeria
      const { status : mediaStatus} = await MediaLibrary.requestPermissionsAsync();
    })(); 
  }, [])

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        type={tipoCamera}
        style={styles.camera}
        ratio={'16:9'}
      >
        <View style={styles.viewFlip}>
          <TouchableOpacity style={styles.btnFlip} onPress={() => setTipoCamera(tipoCamera == CameraType.front ? CameraType.back : CameraType.front)}>
            <Text style={styles.textFlip}>
              Trocar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnCaptura} onPress={() => CapturePhoto()}>
            <FontAwesome name='camera' size={23} color={'#ffffff'}/>
          </TouchableOpacity>

          <Modal animationType='slide' transparent={false} visible={openModal}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30}}>
                <Image 
                style={{ width: '100%', height: 500, borderRadius: 10}}
                source={{uri : photo}}/>

                <View style={{ margin: 15, flexDirection: 'row'}}>
                  <TouchableOpacity style={styles.btnCancel} onPress={() => ClearPhoto()}>
                    <FontAwesome name='trash' size={23} color={'#ff0000'}/>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btnUpload} onPress={() => SavePhoto()}>
                    <FontAwesome name='save' size={23} color={'#121212'}/>
                  </TouchableOpacity>
                </View>
              </View>
          </Modal>
        </View>
      
      </Camera>
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
  camera: {
    flex: 1,
    height: '80%',
    width: '100%'
  },

  viewFlip: {
    flex: 1,
    backgroundColor: 'trasparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },

  btnFlip: {
    // position: 'absolute',
    // bottom: 20,
    // left: 20,
    padding:15
  },

  textFlip: {
    fontSize: 20,
    color: '#ffff',
    marginBottom: 20
  },

  btnCaptura: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor:'#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnCancel: { 
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor:'trasparent',
    alignItems: 'center',
    justifyContent: 'center',
   },

  btnUpload: { 
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor:'trasparent',
    alignItems: 'center',
    justifyContent: 'center',
   },
});
