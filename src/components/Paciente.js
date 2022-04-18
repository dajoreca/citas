
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Paciente = ({item}) => {
    const {paciente, fecha} = item 
    const formatearFecha = new Date(fecha)
    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day:'numeric'
    
    }
    return nuevaFecha.tolocaleDateString('es-ES', opciones)
  return (
    <View>
        <Text>{paciente}</Text> 
        <Text>{formatearFecha(fecha)}</Text>

    </View>
    
  )
}

export default Paciente