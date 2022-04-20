
export const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha)
    const opciones = {
      weekday: 'long',  //Semana completa
      year: 'numeric',  //Solo numeros
      month: 'long',    //Mes completo
      day:'numeric'     //Solo numeros
    }
  
  
  
    return nuevaFecha.toLocaleDateString('es-ES', opciones)
 
    
}