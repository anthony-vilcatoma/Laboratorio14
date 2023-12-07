import React, { useState } from 'react'
import ModalEmpleado from './ModalEmpleado';

export default function ButtonAddEmpleado() {
const [viewModal,setStateModal] = useState(false);
  return (
    <>
      {viewModal ? <ModalEmpleado/> : ""}
      <div onClick={setStateModal(true)}>Agregar</div>

    </>
    )
}
