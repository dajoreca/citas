
import React, { useState } from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Modal,
  FlatList

} from 'react-native';

import Paciente from './src/components/Paciente';
import Formulario from './src/components/Formulario';

const App = () => {

  const [modalVisible, setModalVisible] = useState (false) 
    console.log(modalVisible)

  const [pacientes, setPacientes] = useState ([])

  const nuevaCitaHandler = () => {
    //console.log('diste click...')
  }
      //Esto es mejor que :
      //<Pressable
      //onPress={ () => {
        //console.log('Presionaste el boton 1')
      //}}

  return (
    <SafeAreaView style ={styles.container}>
      <Text style={styles.titulo}> Administrador de Citas {' '} 
        <Text style = {styles.tituloBold}>Veterinaria
        </Text>
      </Text>

      <Pressable
        onPress = { nuevaCitaHandler }
      //para un codigo corto no esta mal, pero mejor sacarlo del return
        //onPress={ () => {
        // console.log('Presionaste el boton 1')
        //}}

        //onPressIn={ () => {
        //  console.log('Presionaste el boton 2')
        //}}

        //onLongPress={ () => {
        //  console.log('Presionaste el boton mas de la cuenta')
        //}}

        //onPressOut={ () => {
        //  console.log('Dejaste de presionar el boton')
        //}}
        style={styles.btnNuevaCita}
      >

          <Text
            style={styles.btnTextoNuevaCita}
            onPress={() => setModalVisible(!modalVisible)}
          >Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? //si es igual a 0 entonces "no hay pacientes" si es diferente a 0 te muestra los pacietnes
      
      <Text style= {styles.noPacientes}>No hay pacientes aun
      </Text>: 
      <FlatList
        style= {styles.listado}
        data={pacientes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          
          return(
            <Paciente 
              item={item}
              setModalVisible={setModalVisible}
            />
          )
        }}

      />
    }


      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes= {setPacientes}
      
      />
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#77E6CB',
    flex: 1,
  },

  titulo: {
    textAlign: 'center',
    fontSize : 30,
    color: '#374151',
    fontWeight: '600'
  },

  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita: {
    backgroundColor: '#30D915',
    padding: 15,
    marginTop: 30,
    marginBottom:30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  noPacientes:{
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'

  },
  listado:{
    margintop: 50,
    marginHorizontal:30
  }

})

export default App;
