

export default function TablaAlumno({ nombre, correo, estado, carrera, modulos }) {

    return (
            <tr className="hover:bg-gray-50 flex justify-center">
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div className="relative h-10 w-10">
                        <img
                            className="h-full w-full rounded-full object-cover object-center"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                    </div>
                    <div className="text-sm">
                        <div className="font-medium text-gray-700">{nombre}</div>
                        <div className="text-gray-400">{correo}</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    <span
                        className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                        {estado}
                    </span>
                </td>
                <td className="px-6 py-4">{carrera}</td>
                <td className="px-6 py-4">
                    <div className="flex gap-2">
                        <span
                            className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                        >
                            {modulos}
                        </span>
                    </div>
                </td>
                <td className="px-6 py-4">
                </td>
            </tr>
    );
}
