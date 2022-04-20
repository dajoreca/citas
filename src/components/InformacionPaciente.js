
import React from 'react'
import {Text, SafeAreaView, View, Pressable, StyleSheet} from 'react-native'

import {formatearFecha} from '../helpers'

const InformacionPaciente = ({paciente, setModalPaciente}) => {
  return (

        <SafeAreaView
            style={styles.contenedor}
        
        >
            <View>
                <Pressable
                    onLongPress={() => setModalPaciente(false)}
                    style={styles.btnCerrar}
                >
                    <Text style={styles.btnCerrarTexto}>X</Text>

                </Pressable>
            </View>
           
            <Text style={styles.titulo}>Informacion {''}
                <Text style={styles.tituloBold}>Paciente</Text>
            </Text>

            <View
                style={styles.contenido}
            >
                <View>
                    <Text>Nombre:</Text>
                    <Text>{paciente.paciente}</Text>
                </View>
                
                <View>
                    <Text>Propietario:</Text>
                    <Text>{paciente.propietario}</Text>
                </View>

                <View>
                    <Text>Email:</Text>
                    <Text>{paciente.email}</Text>
                </View>

                <View>
                    <Text>Telefono:</Text>
                    <Text>{paciente.telefono}</Text>
                </View>

                <View>
                    <Text>Fecha Alta:</Text>
                    <Text>{formatearFecha(paciente.fecha)}</Text>
                </View>

                <View>
                    <Text>Sintomas:</Text>
                    <Text>{paciente.sintomas}</Text>
                </View>
                

            </View>

            

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#6D28D9',
        flex: 1
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 10,
        color: '#FFF'
    },
    tituloBold: {
        fontWeight: '900'
    },
    btnCerrar:{
        marginVertical: 4,
        backgroundColor: '#5827A4',
        marginHorizontal: 380,
        padding: 2,
        borderRadius: 10,
        marginTop: 5,
        marginRight:5
        
    },
    btnCerrarTexto: {
        color:'#FFF',
        textAlign:'center',
        fontWeight: '900',
        fontSize: 20,
        textTransform: 'uppercase'
    },
    contenido:{
        backgroundColor: '#FFF',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 10,
        height: 300,

        //desde aqui es para sombras pero solo para ios
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        //para android solo necesitas elevation
        elevation: 6,

    }
})

export default InformacionPaciente