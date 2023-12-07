import React, { useEffect, useState } from 'react'

export default function ModalEmpleado() {

  const [formData,setFormData] = useState({
    nombre:null,
    categoria:null
  });  

  const [optionsCategory,setOptionsCategory] = useState([]);
  const changeValue = (event) =>{
    const {name,value}=event.target;
    setFormData({...formData,[name]:value})
  }


  const enviar = () => {
    fetch("http://127.0.0.1:8000/v1/empleados", {
      method: 'POST', // Es importante especificar el método (en este caso, POST)
      headers: {
        'Content-Type': 'application/json' // Asegúrate de enviar datos en formato JSON
      },
      body: JSON.stringify(formData) // Convierte el objeto formData a JSON
    })
    .then(res => res.json())
    .then(data => {
      // Hacer algo con la respuesta, si es necesario
      console.log(data);
    })
    .catch(error => {
      // Manejo de errores
      console.error('Error al enviar datos:', error);
    });
  };

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/v1/categorias")
    .then(res=>res.json())
    .then(data=>{
        setOptionsCategory(data)
    })
  })
  return (
<div className="mt-10 w-fit p-5 bg-gray-400 mx-auto rounded-md">
        <h1 className='font-bold tex-white text-center' >{nombre}</h1>
        <label className='block my-5 text-center'>Registrar Empleado</label>
        <input type="text" name='nombre' onChange={changeValue} className='p-2 w-11/12  rounded-md bg-gray-200 text-gray-600 mx-auto block' />
        <select name="categoria"  onChange={changeValue} id="">
            {optionsCategory.map(e=><option key={e.id} value={e.id}>{e.name}</option>)}
        </select>
        <button onClick={enviar} className='bg-blue-500 text-white py-1 px-2 rounded-lg text-md mx-auto block mt-5 p-3'>Registrar</button>
    </div>  )
}
