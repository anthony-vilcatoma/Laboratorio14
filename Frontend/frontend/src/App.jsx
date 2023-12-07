
import React, { useEffect, useState } from 'react'
import TableComponent from './components/TableComponent'
import ElementTableComponent from './components/ElementTableComponent'
import FormSueldoComponent from './components/FormSueldoComponent';
import ButtonAddEmpleado from './components/ButtonAddEmpleado';

export default function App() {
  const [empleados,setEmpleados] = useState([]);

  const [openForm,setOpenForm] = useState(false); 

  const [formSueldo,setFormSueldo] = useState({
    nombre:null,
    categoriaPrice:null
  });


  useEffect(()=>{
    fetch("http://127.0.0.1:8000/v1/empleados")
    .then(res=>res.json())
    .then(data=>{
      setEmpleados(data)
    })
  },[])
  return (
    <>
    <TableComponent>

            {empleados.map(e=><ElementTableComponent key={e.id}  openForm={()=>{
              setOpenForm(true)
            }}   calcularSueldo={()=>{
              setFormSueldo({...formSueldo,nombre:e.nombre,categoriaPrice:e.categoria.precio})
            }}  object={e}/>)}
      

    </TableComponent>
    {openForm ? <FormSueldoComponent Categoria={formSueldo.categoriaPrice}  nombre={formSueldo.nombre}/> : ""} 
    </>

  )
}
