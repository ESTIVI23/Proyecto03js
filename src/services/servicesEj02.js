

export const guardarDatos =(nombre, apellido, dni)=>{

    // creo un objeto con los datos del estudiante y
    //  lo retorno para poder guardarlo
    //  en el array de estudiantes
    const estudiante = {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        estador: true
        
    }
      
    
    return estudiante;
};


export const mostrarDatos = 
(estudiante, contenedor,) => {

 contenedor.innerHTML = estudiante.map((estudiante, index) => 

        `<li>Número ${index +1}: 
        <strong>
             ${estudiante.apellido}
             ${estudiante.nombre} 
             ${estudiante.dni} 
         </strong></li>`).join(" ");

};