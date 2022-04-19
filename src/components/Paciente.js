
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const Paciente = ({item, setModalVisible, pacienteEditar, pacienteEliminar}) => {
    const {paciente, fecha, id} = item 

    const formatearFecha = fecha => {
      const nuevaFecha = new Date(fecha)
      const opciones = {
        weekday: 'long',  //Semana completa
        year: 'numeric',  //Solo numeros
        month: 'long',    //Mes completo
        day:'numeric'     //Solo numeros
      }



      return nuevaFecha.toLocaleDateString('es-ES', opciones)
 
    }

    return (
      <View style={styles.contenedor}>
        <Text style={styles.label}>Paciente:</Text>
        <View style={styles.contenedrFyP}>
        
          <Text style={styles.texto}>{paciente}</Text> 
          <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

        </View>
        
        
        <View style={styles.contenedorBotones}>
          <Pressable 
            style={[styles.btn, styles.btnEditar]}
            onLongPress={ () => {
              setModalVisible(true)
              pacienteEditar(id)
            }}
          >
              <Text style={styles.btnTexto}>Editar</Text>
          </Pressable>

          <Pressable 
            style={[styles.btn, styles.btnEliminar]}
            onLongPress={() => pacienteEliminar(id)}
          
          >
              <Text style={styles.btnTexto}>Eliminar</Text>
          </Pressable>

        </View>


      </View>
    
    )
}

const styles=StyleSheet.create({
  contenedor: {
    
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomColor: '#94A3B8',
    borderBottomWidth: 4,
    borderRadius: 10

  },

  label:{
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10

  },

  texto:{
    color:'#6D28D9',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10

  },

  fecha:{
    color:'#374151'

  },

  contenedorBotones:{
      flexDirection: 'row', //ponerlo izq y der
      justifyContent: 'space-between', //colocar ambos a los extremos
      marginTop: 10
  },

  btn:{
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius:5 
  },

  btnEditar:{
    backgroundColor:'#F59E0B'

  },

  btnEliminar:{
    backgroundColor: '#EF4444'

  },
  btnTexto:{
    textTransform:'uppercase',
    fontWeight:'700',
    fontSize: 12,
    color:'#FFF'
  },
  contenedrFyP:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }

  
})

export default Paciente