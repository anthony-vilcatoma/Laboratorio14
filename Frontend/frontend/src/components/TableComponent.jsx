import React from 'react'

export default function TableComponent(props) {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden mt-16 mx-4 md:mx-10">
    <table className="w-full table-fixed">
        <thead>
            <tr className="bg-gray-400">
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">#</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Nombre</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Categoria</th>

                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Accion</th>
            </tr>
        </thead>
        <tbody className="bg-white">
            {props.children}
        </tbody>
    </table>
</div>
  )
}
