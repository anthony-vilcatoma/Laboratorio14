import React, { useState } from 'react'
import Swal from 'sweetalert2'
export default function FormSueldoComponent({nombre,Categoria}) {

    const [horasT,setHorasT] = useState();
    
    const mostrarResultados=()=>{
        let sueldo = horasT*Categoria
    Swal.fire({
        title: `Sueldo de ${nombre}`,
        text: `Por trabajar ${horasT} hora(s) su sueldo sera ${sueldo} soles`,
        icon: "success"
      });
  }  
  return (
    <div className="mt-10 w-fit p-5 bg-gray-400 mx-auto rounded-md">
        <h1 className='font-bold tex-white text-center' >{nombre}</h1>
        <label className='block my-5 text-center'>Ingrese las horas trabajadas</label>
        <input type="text" onChange={(event)=>{
            setHorasT(event.target.value)
        }} className='p-2 w-11/12  rounded-md bg-gray-200 text-gray-600 mx-auto block' />
        <button onClick={mostrarResultados} className='bg-blue-500 text-white py-1 px-2 rounded-lg text-md mx-auto block mt-5 p-3'>Calcular</button>
    </div>
  )
}
