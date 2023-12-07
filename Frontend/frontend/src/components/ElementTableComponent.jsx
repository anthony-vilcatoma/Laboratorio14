import React from 'react'

export default function ElementTableComponent({object,openForm,calcularSueldo}) {
    console.log(object)
    return (
        <tr>
            <td className="py-4 px-6 border-b border-gray-200">{object.id}</td>
            <td className="py-4 px-6 border-b border-gray-200 truncate">{object.nombre}</td>
            <td className="py-4 px-6 border-b border-gray-200 truncate">{object.categoria.nombre}</td>
            <td className="py-4 px-6 border-b border-gray-200">
                <button onClick={()=>{
                    openForm();
                    calcularSueldo();
                
                }} className='bg-green-500 text-white py-1 px-2 rounded-lg text-md'>Calcular Sueldo</button>
            </td>
        </tr>
    )
}
